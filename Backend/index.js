import express from "express";
import cors from "cors";
import mongoose from "./DB/db.js";
import "dotenv/config";
import chalk from "chalk";
import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";
import router from "./Routes/index.js";
import authenticateUser from "./MiddleWare/authenticate.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
let PORT = process.env.PORT;
app.use(
    cors({
        origin: "*",
    }),
);

mongoose.connection.on("connected", () => {
    console.log(chalk.bgGreenBright(chalk.black("Connected to MongoDB!")));
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

// app.use(authenticateUser);
app.use("/", router);
app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}...`);
});
