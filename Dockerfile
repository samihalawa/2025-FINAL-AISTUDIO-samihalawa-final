# Multi-stage: build Vite SPA, serve via nginx on 8080 (Coolify)
FROM node:20-slim AS build
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends poppler-utils
COPY package*.json ./
RUN (npm ci || npm install) \
    && ROLLUP_VERSION="$(node -p "require('./node_modules/rollup/package.json').version")" \
    && ROLLUP_ARCH="$(node -p "process.arch")" \
    && ROLLUP_PACKAGE="@rollup/rollup-linux-$ROLLUP_ARCH-gnu" \
    && (node -e "require.resolve(process.argv[1])" "$ROLLUP_PACKAGE" \
        || npm install --no-save --no-package-lock "$ROLLUP_PACKAGE@$ROLLUP_VERSION")
COPY . .
ARG VITE_POSTHOG_KEY
ENV VITE_POSTHOG_KEY=$VITE_POSTHOG_KEY
RUN npm run build
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV PORT=8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
