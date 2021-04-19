FROM node:10.15.0 as build
WORKDIR /service
COPY . .
RUN yarn
EXPOSE 4000
CMD ["npm", "start"]
