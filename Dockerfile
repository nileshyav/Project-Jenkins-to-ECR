FROM node:18 AS builder
WORKDIR /app
COPY ./package*.json /app
RUN npm install
RUN npm install nodemon -D
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]