FROM node:18-bullseye AS build
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# Nginx image to serve the build
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
