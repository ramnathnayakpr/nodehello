FROM node
EXPOSE 5000
COPY hello.js .
CMD node hello.js
