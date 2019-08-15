# Site Parser

## About

This app is parses a user entered website and returns the site's images and words. You can toggle between a pie
chart or bar chart of the top ten words or view all parsed words in a list.

The UI is made with `yarn`, `react`, and `material-ui`. It's transpiled and bundled with `parcel`. The server runs a `node`
api built with `express` that parses user entered websites with `jsdom`.

The client takes the user entered site and sends it to the api via a query parameter. Then the api uses a get request to fetch the
site's html and parses it into a document model object using jsdom. The api removes all non relevant nodes, then pulls out all image urls. Then the
api grabs all body text content, cleans it up, and sorts it by word count. All of the image urls and words are then sent back to the client.

## Server

### Starting the server

- `yarn`
- `yarn run server`

## UI

### Starting UI

- If you haven't installed the dependencies yet: `yarn`
- `yarn run client`
- Go to localhost:1234
