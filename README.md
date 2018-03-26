book-shelf:
    container_name: book-shelf
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/usr/src/app'
      - '/usr/src/app/node_modules'
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=development


      "proxy": {
        "/api": {
          "target": "http://localhost:8080",
          "pathRewrite": {"^/api" : ""},
          "secure": false
        }
      },
