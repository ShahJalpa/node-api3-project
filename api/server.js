const express = require('express');
const morgan = require("morgan");
const mw = require("./middleware/middleware.js");
const helmet = require("helmet");
const userRouter = require("./users/users-router.js")

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());


// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
