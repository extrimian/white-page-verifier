FROM --platform=linux/amd64 node:20-alpine
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
EXPOSE 3002
ENTRYPOINT ["yarn", "start"]