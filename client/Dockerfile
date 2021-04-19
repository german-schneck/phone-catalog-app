# Step 1. Build React App
FROM node:10.15.0 as build
WORKDIR /app
COPY . .
RUN yarn && yarn build

# Step 2. Setup Production Environment
FROM nginx:1.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY --from=build /app/conf/default.conf /etc/nginx/conf.d/defaul.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
