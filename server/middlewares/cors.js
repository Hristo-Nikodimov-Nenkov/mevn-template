import cors from "cors";
import {appConfigs} from "./../configs/index.js";

export default function (app) {
    app.use(cors(appConfigs.corsOptions));
}
