
FROM node:18 
WORKDIR /app
COPY ./package*.json ./
RUN npm install
RUN npm install nodemon -D
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
