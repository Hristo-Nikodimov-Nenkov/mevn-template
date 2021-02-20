import  homeRouter from "./../routers/home.js";

const fallback = (req, res) => {
    res.sendFile("../public/index.html");
}
export default function (app) {
    app.use("/", homeRouter);

    app.use(/.*/, fallback)
}
