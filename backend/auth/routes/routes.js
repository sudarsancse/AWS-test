import express from "express";
import { dog } from "../controller/user.js";

const router = express.Router();

router.get("/dog", dog);

export default router;
