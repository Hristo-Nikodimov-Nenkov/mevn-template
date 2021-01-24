import express from "express";

const app = express();

import {
    cors,
    staticFiles,
    bodyParser,
    server
} from "./middlewares/index.js";

cors(app);
staticFiles(app);
bodyParser(app);

server(app);
