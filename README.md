# Site Parser

## About

This app is configured to use postcss, posthtml, react, and is bundled with parcel.

## UI

### Starting UI

- `yarn`
- `yarn run start-ui`
- Go to localhost:1234

### Starting Docker container

- From the base directory of the app
- `docker build -t core .`
- `docker run --name core -d -p 80:80 core`

## Server

### Starting the server

- If you haven't installed the dependencies yet: `yarn`
- `yarn run start-server`
