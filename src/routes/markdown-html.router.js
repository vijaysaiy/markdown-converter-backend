import express from "express";
import { markDownController } from "../controller/markdown-html.controller.js";

const router = express.Router();

router.post("/html", (req, res) =>
  markDownController.convertToHTML(req, res)
);

export default router;
