# Money Under Control

This is a personal finances application using:
[Angular 7](https://angular.io/) as Front End
[Sails v1.1](https://sailsjs.com) as Back End

## Development

### Requirements:

- Docker
- NPM
- Node ^9.6.1

### How to set this project to run

- Clone Repo
- `cd Money-Under-Control`
- `npm install && cd ./client && npm install && cd ..`
- `docker-compose build app`
- `docker-compose run app npm rebuild node-sass`
- `docker-compose up app`

After this can use `http://localhost:4200/` and `http://localhost:1337`
