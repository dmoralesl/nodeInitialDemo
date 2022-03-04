import express from "express";
import bodyParser from "body-parser";

import router from "./routes.js";

const server = express();

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());

server.use('/api', router)

export default server;
