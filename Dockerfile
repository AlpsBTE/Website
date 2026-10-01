# ---- Build stage: compile the site with Bun/Vite ----
FROM oven/bun:1 AS build
WORKDIR /app

# Copy only the dependency manifests first so this layer is cached
# between builds as long as the lockfile does not change
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ---- Serve stage: static file server ----
FROM nginx:alpine

# React Router uses browser history routing, so unknown paths must
# fall back to index.html instead of 404ing
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
