FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g npm@10.5.0
RUN npm install
RUN npm install vite@latest --save-dev
RUN npm update

COPY . .

EXPOSE 8001

CMD [ "npm", "run", "dev", "--", "--host"]