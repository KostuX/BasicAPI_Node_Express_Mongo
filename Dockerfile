# Use the official Node.js image as the base image
FROM node:20
ENV DB_USERNAME=user \
    DB_PASSWORD=password \
    DB_HOST_REMOTE=185.38.60.59 \
    SERVER_PORT=3000 

# Set the working directory
WORKDIR /usr/src/simpleAPI

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "server.js"]



# build image [ docker build -t {name:tag} {location fo dockerfile}]
# docker build -t simpleAPI:1.0 .

# run docker container 
# docker run -d --env-file .env -p 3000:3000 --name simple_api simple_api:1.0


## connect to container shell
# docker exec -it {container id} /bin/bash