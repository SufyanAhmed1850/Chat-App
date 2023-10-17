import jwt from "jsonwebtoken";
import express from "express";

const router = express.Router();

const authenticateUser = async (req, res, next) => {
    const authorization = req.headers["authorization"];
    console.log("Middle Authentication");
    console.log(req.headers);
    if (!authorization) {
        return res.status(401).send({
            message: "Unauthorized",
        });
    }

    const token = authorization.split(" ")[1];
    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_KEY);
        console.log("decodedToken--->", decodedToken);
        // if (req.user == decodedToken) {
        // }
        next();
        console.log(decodedToken());
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            message: "Invalid token",
        });
    }
};

export default authenticateUser;
