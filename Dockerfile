# Using official node image as a parent image
FROM node:16

# Setting the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./


# Installing into our environment
RUN npm install

# Copy the current directory contents
COPY . .

# Inform the ports your application is listening on
EXPOSE 8000

# Run npm start when the container launches
CMD ["npm", "start"]