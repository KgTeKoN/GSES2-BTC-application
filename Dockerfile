FROM node:16.14.0

WORKDIR /src/app

COPY package.json ./

COPY . .

RUN npm ci

EXPOSE 5000

CMD ["node", "main.js"]
