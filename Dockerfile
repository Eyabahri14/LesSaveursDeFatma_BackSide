# Downloading the NodeJs image
FROM node

# Defining the working directory inside the container
WORKDIR /app

# Copying package.json and package-lock.json (if present) files from the build directory to the destination directory (WORKDIR)
COPY package*.json ./

# Installing Node.js dependencies before the build
RUN npm install
# Copying the entire project to the destination directory
COPY . .

# Exposing port 3000 of the container
EXPOSE 3000
