FROM node:23-alpine

WORKDIR /app
COPY package*.json .
RUN npm i

COPY . .
RUN npm run build 
EXPOSE 3003
CMD ["npm", "run", "start"]