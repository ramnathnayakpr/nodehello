FROM node
EXPOSE 5000
COPY hello.js .
ENTRYPOINT node hello.js
