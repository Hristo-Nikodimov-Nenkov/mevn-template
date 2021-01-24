import bodyParser from "body-parser";

export default function (app) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
}
