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
- `yarn install && cd ./client && yarn install && cd ..`
- `docker-compose build`
- `docker-compose run --rm start_dependencies`
- `docker-compose up app`

After this can use `http://localhost:4200/` and `http://localhost:1337` also on `localhost:3360` MySQL should be up and running.

### Fill `.env` file

Please use you data from: [Firebase Console](https://console.firebase.google.com/)

### Swagger Implementation

- Running generators: `rails generate rspec:install`, `rails g rswag:install`
- Generate the swagger JSON: `rake rswag:specs:swaggerize`
- Check: `http://localhost:3000/api-docs`
