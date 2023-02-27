FROM node:alpine as build 

WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .
RUN npm run build

FROM nginx:latest as product
COPY --from=build /dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]