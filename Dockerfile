FROM node:latest as build-stage
WORKDIR /app
COPY ./package.json ./
RUN yarn
COPY . .
RUN yarn build

# MOVE TO DEPLOYMENT ENVIROMENT
FROM nginx:stable-alpine as production-stage
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
