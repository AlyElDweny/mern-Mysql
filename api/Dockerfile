FROM node:20

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start:dev"]