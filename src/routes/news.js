import express from "express";
const router = express.Router();

import newsController from "../app/controllers/NewsController.js";

// match complex path sooner than original path
// /news + / = /news/
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

export default router;
