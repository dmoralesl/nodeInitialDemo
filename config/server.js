import express from "express";
import bodyParser from "body-parser";

import router from "./routes.js";

import authenticateJWT from "../src/middlewares/jwtAuth.js";
import unless from "../src/helpers/unless.js";

const server = express();

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());
server.use(unless('/api/login', authenticateJWT));

server.use('/api', router)

export default server;
