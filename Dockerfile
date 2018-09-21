FROM node:latest
COPY nodehello.js /
RUN npm install express -y
CMD node nodehello.js
