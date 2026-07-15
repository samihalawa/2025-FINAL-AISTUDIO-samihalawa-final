# Multi-stage: build Vite SPA, serve via nginx on 8080 (Coolify)
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN (npm ci || npm install) \
    && ROLLUP_VERSION="$(node -p "require('./node_modules/rollup/package.json').version")" \
    && npm install --no-save --no-package-lock "@rollup/rollup-linux-x64-gnu@$ROLLUP_VERSION"
COPY . .
RUN npm run build
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf 'server {\n  listen 8080;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  absolute_redirect off;\n  port_in_redirect off;\n  location ~* /[^/]+\\.[^/]+$ {\n    try_files $uri =404;\n  }\n  location / {\n    try_files /index.html =404;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
ENV PORT=8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
