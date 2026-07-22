import React from 'react';
import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { AppRoutes } from './App';
import { LanguageProvider } from './i18n/LanguageContext';
import type { LoadedArticle } from './pages/BlogArticlePage';

export function render(url: string, initialBlogArticle: LoadedArticle | null = null): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    const chunks: Buffer[] = [];
    let settled = false;

    output.on('data', (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    output.on('end', () => {
      if (!settled) {
        settled = true;
        // HTML cannot contain U+0000. React's stream can emit it beside a
        // multibyte text boundary on some Node runtimes, so normalize here.
        resolve(Buffer.concat(chunks).toString('utf8').replaceAll('\0', ''));
      }
    });
    output.on('error', (error) => {
      if (!settled) {
        settled = true;
        reject(error);
      }
    });

    const timeout = setTimeout(() => {
      abort();
      if (!settled) {
        settled = true;
        reject(new Error(`SSR timed out for ${url}`));
      }
    }, 20_000);

    const { pipe, abort } = renderToPipeableStream(
      <React.StrictMode>
        <LanguageProvider>
          <StaticRouter location={url}>
            <AppRoutes initialBlogArticle={initialBlogArticle} />
          </StaticRouter>
        </LanguageProvider>
      </React.StrictMode>,
      {
        onAllReady() {
          clearTimeout(timeout);
          pipe(output);
        },
        onShellError(error) {
          clearTimeout(timeout);
          if (!settled) {
            settled = true;
            reject(error);
          }
        },
        onError(error) {
          clearTimeout(timeout);
          if (!settled) {
            settled = true;
            reject(error);
          }
        },
      },
    );
  });
}
