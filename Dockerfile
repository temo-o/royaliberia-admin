FROM node:20.11.0

# Set working directory
WORKDIR /app

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json (if available)
COPY ./package*.json /app/

# Install project dependencies
RUN npm install

# Copy the rest of the app
COPY . /app

EXPOSE 4400

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4400"]