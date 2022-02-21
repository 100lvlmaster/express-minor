FROM node:latest

# create root application folder
WORKDIR /usr/src/app


# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
COPY . .

# check files list
RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "./dist/src/server.js" ]