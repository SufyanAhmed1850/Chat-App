import express from "express";
import mongoose from "../../DB/db.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const User = mongoose.model("User");

const LOGIN = express.Router();

LOGIN.post("/", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email });
        // If the user does not exist, return an error response
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        // Compare the user's password to the password stored in the user document
        const isPasswordValid = (await user.password) === password;
        // If the passwords do not match, return an error response
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Incorrect password." });
        }
        // If everything is fine, send the user object as a response
        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.JWT_KEY,
            {
                expires: "7",
            }
        );
        return res.status(200).json({ message: "Success", token });
    } catch (e) {
        console.error(e);
        // Handle other errors here, and return an appropriate error response
        return res.status(500).json({ message: "Server error." });
    }
});

export default LOGIN;
