import express from "express";
import { registerAccount } from "../controllers/accountController.js";

const router = express.Router();

router.post("/register", registerAccount);

export default router;
