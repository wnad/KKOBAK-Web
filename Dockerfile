# 1) Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Serve stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY public/config.js.template /usr/share/nginx/html/config.js.template
COPY entrypoint.sh /entrypoint.sh
RUN apk add --no-cache gettext \
 && chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
