FROM node:18
WORKDIR /app

# Copy package.json only
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy backend code
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
