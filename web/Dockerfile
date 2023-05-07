# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app/udm-web
WORKDIR /app/udm-web

# Install curl and pnpm
RUN apk add --no-cache curl \
    && curl -L https://unpkg.com/@pnpm/self-installer | node \
    && apk del curl

# Install the same version of pnpm that you have installed globally
RUN npm install -g pnpm@8.4.0

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
# RUN pnpm run build

# Expose the port that the application will run on
EXPOSE 3000

# Start the application in [development] mode
CMD ["pnpm", "dev"]
# CMD ["pnpm", "start"]

# To build and start the Docker container, run:
# docker build -t udm-web .
# docker run -p 3000:3000 udm-web
