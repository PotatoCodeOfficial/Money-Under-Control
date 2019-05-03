FROM node:9.6.1

EXPOSE 3000 1337

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json 
COPY client/package.json client/package.json 

RUN npm install -g nodemon && npm install -g sails@1.1.0

# CMD ["forever", "start" ,"./app.js","--prod"]
# CMD ["node","./app.js","--prod"]
CMD ["npm","run", "dev"]
