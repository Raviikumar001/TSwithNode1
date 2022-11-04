import { createServer, IncomingMessage, ServerResponse } from "http";
import { writeFile, writeFileSync } from "fs";
import { requestHandlerRoutes } from "./routes";
// const routes = require('./routes');
const fs = require('fs');


const port = 3000;
const server = createServer(requestHandlerRoutes);

server.listen(3000);
