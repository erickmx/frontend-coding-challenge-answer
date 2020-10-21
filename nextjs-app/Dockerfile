from node:12.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

RUN npm run build

EXPOSE ${PORT} 3000

CMD ["npm", "start"]
