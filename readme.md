# 5bx
5BX is a way to track a simple workout.

Influenced by the 5BX system created in the 1950s by Dr. Bill Orban, and The Hacker's Diet by John Walker, although this project claims no affiliation with either.

This application is built with Express and Bulma.

## Building the application

The app was originated using `express-generator`:
```bash
npx express-generator --view=pug
```

After cloning the repo, the following three commands will build the application and start the server.

```bash
npm install
npm run css
npm start
```

## Docker

The easiest way to run the application is using Docker.
This is published as a Docker image on Docker Hub at https://hub.docker.com/r/karldreher/5bx.  

Two tags track the branches of this repository:

- `karldreher/5bx:latest` tracks the `master` branch and is considered the production release.

- `karldreher/5bx:develop` tracks the `develop` branch and is the development version.

## Environment Variables
When running either the Docker image or running from Node.js, the following environment variables can be used to control the deployment:  

`NODE_ENV`: Set to `production` when running in a production scenario, by default this will be set to `development` which will show extra debug information when errors are encountered.  

`PORT` will control the port the service listens on.  Default is 3000, from Node.js default.

It is intentional behavior that neither of these are set within the Docker image.