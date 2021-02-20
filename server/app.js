import express from "express";

const app = express();

import {
    cors,
    staticFiles,
    bodyParser,
    routes,
    server
} from "./middlewares/index.js";

cors(app);
staticFiles(app);
bodyParser(app);

routes(app);
server(app);
