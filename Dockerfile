FROM node:14-buster-slim

# Copy app to src directory
WORKDIR /usr/src/5bx
COPY --chown=node:node . /usr/src/5bx

#Run build steps
RUN npm ci
RUN npm run css
USER node
CMD "npm" "start"