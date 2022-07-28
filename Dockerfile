FROM node

WORKDIR /docker

COPY . /docker

RUN npm install

EXPOSE 5000

CMD ["node", "main.js"]
