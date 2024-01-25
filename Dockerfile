FROM node:14-alpine 
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .
RUN npm run build

# Expose port
EXPOSE 3000
# Start the app
CMD [ "npx", "serve","-s", "build"]
