# Instructions from the app developer
# - you should use the 'node' official image, with the alpine 6.x branch
FROM node:10-alpine

# - this app listens on port 4200, but the container should launch on port 80
#  so it will respond to http://localhost:80 on your computer
EXPOSE 1337 4200
# - then it should use alpine package manager to install tini: 'apk add --update tini'
# RUN apk add --update tini
# - then it should create directory /usr/src/app for app files with 'mkdir -p /usr/src/app'
RUN mkdir -p /usr/src/app

# - Node uses a "package manager", so it needs to copy in package.json file
WORKDIR /usr/src/app
COPY package.json package.json 
COPY client/package.json client/package.json 
# - then it needs to run 'npm install' to install dependencies from that file
RUN npm cache clean --force && npm install && npm install nodemon -g && npm install -g @angular/cli && npm install sails -g
# - to keep it clean and small, run 'npm cache clean --force' after above
# - then it needs to start container with command 'tini -- node ./bin/www'
# CMD ["forever", "start" ,"./app.js","--prod"]
# CMD ["node","./app.js","--prod"]
CMD ["npm","run", "dev"]

# - in the end you should be using FROM, RUN, WORKDIR, COPY, EXPOSE, and CMD commands
