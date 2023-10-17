import express from "express";
import SIGNUP from "./auth/signUp.js";
import LOGIN from "./auth/logIn.js";

const router = express.Router();

router.use("/auth/sign-up", SIGNUP);
router.use("/auth/log-in", LOGIN);

export default router;
