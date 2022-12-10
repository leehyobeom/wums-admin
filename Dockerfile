FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./
COPY .npmrc .npmrc

RUN npm install
RUN rm -f .npmrc

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]