import express from "express";
import {appConfigs} from "./../configs/index.js";

export default function (app) {
    app.use(express.static(appConfigs.publicPath));
}
