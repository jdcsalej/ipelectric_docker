FROM node:20.19.0 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build --prod

FROM nginx:alpine AS runner

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist ./

EXPOSE 80
