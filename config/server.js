import express from "express";
import bodyParser from "body-parser";

import setRoutes from "./routes";

const server = express();
setRoutes(server);

server.use(bodyParser.json());

export default server;
