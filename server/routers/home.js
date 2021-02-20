import {Router} from "express";

const router = Router();

import homeController from "../controllers/home.js";

router.get("/", homeController.homeGet);

export default router;
