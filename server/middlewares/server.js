import {appConfigs} from "./../configs/index.js";

export default function (app) {
    app.listen(appConfigs.port, () => console.log(`Server started on port: ${appConfigs.port}`));
}
