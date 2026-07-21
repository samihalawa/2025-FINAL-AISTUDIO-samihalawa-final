# Multi-stage: build Vite SPA, serve via nginx on 8080 (Coolify)
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN (npm ci || npm install) \
    && ROLLUP_VERSION="$(node -p "require('./node_modules/rollup/package.json').version")" \
    && ROLLUP_ARCH="$(node -p "process.arch")" \
    && ROLLUP_PACKAGE="@rollup/rollup-linux-$ROLLUP_ARCH-gnu" \
    && (node -e "require.resolve(process.argv[1])" "$ROLLUP_PACKAGE" \
        || npm install --no-save --no-package-lock "$ROLLUP_PACKAGE@$ROLLUP_VERSION")
COPY . .
RUN npm run build
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf 'server {\n  listen 8080;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  absolute_redirect off;\n  port_in_redirect off;\n  error_page 404 /404.html;\n  location ~* \\.(?:js|css)$ {\n    add_header Cache-Control "public, max-age=31536000, immutable";\n    try_files $uri =404;\n  }\n  location ~* /[^/]+\\.[^/]+$ {\n    try_files $uri =404;\n  }\n  location = / {\n    add_header Cache-Control "no-cache, no-store, must-revalidate";\n    try_files /index.html =404;\n  }\n  location / {\n    add_header Cache-Control "no-cache, no-store, must-revalidate";\n    try_files $uri/index.html =404;\n  }\n  location = /404.html { internal; }\n}\n' > /etc/nginx/conf.d/default.conf
ENV PORT=8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
