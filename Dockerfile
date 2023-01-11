# build stage
FROM node:16-alpine as builder

ARG API_ENV
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
# Copy app files
COPY . .
RUN npm install --force

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:latest as build-stage
# Copy built assets from builder
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
