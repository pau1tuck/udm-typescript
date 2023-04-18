# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app/udm-web

# Install curl and pnpm
RUN apk add --no-cache curl \
    && curl -L https://unpkg.com/@pnpm/self-installer | node \
    && apk del curl

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN pnpm dev

# Expose the port that the application will run on
EXPOSE 3000

# Start the application in development mode
CMD ["pnpm", "dev"]