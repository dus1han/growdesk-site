# syntax=docker/dockerfile:1
#
# GrowDesk marketing site. A static export (next.config.ts: output "export"),
# so the runtime image is nginx serving files — no Node process in production.

# --- build ------------------------------------------------------------------
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# SITE_URL is baked into the exported HTML (canonical, og:url, robots), so it
# is a build arg. Changing it means rebuilding, not restarting.
ARG SITE_URL=""
ENV SITE_URL=$SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- serve ------------------------------------------------------------------
FROM nginx:1.29-alpine AS runner
# Re-declared so `docker image inspect` shows what the image was built with
# (remote-deploy.sh compares it against the current variable).
ARG SITE_URL=""
ENV SITE_URL=$SITE_URL
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 3000
