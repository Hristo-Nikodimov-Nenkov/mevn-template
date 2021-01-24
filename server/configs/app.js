const devPort = 8000;
const port = process.env.PORT || devPort;

import path from "path";
const publicRelPath = "./server/public";
const publicPath = path.resolve(publicRelPath);
const corsOptions = {

}

export default {
    port,
    publicPath,
    corsOptions
}
