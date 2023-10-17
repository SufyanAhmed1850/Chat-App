import express from "express";
import multer from "multer";
import User from "../../Schema/UserSchema.js";

const SIGNUP = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/"); // This is the folder where your uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Create an instance of the Multer middleware
const upload = multer({ storage: storage });

SIGNUP.post("/", upload.single("file"), async (req, res) => {
    try {
        // console.log(req.body);
        // const existingUserEmail = await User.findOne({ email: req.body.email });
        // if (existingUserEmail) {
        //     // User with the same email already exists.
        //     return res.status(400).send({
        //         status: 400,
        //         message: "User with this email already exists.",
        //     });
        // }
        // const existingUserName = await User.findOne({ email: req.body.email });
        // if (existingUserName) {
        //     // User with the same email already exists.
        //     return res.status(400).send({
        //         status: 400,
        //         message: "User with this email already exists.",
        //     });
        // }
        // const user = new User(req.body);
        // await user.save();

        res.status(200).send({
            status: 200,
            message:
                "Account created successfully! You can now log in with your credentials.",
        });
        // res.status(200).send({
        //     status: 200,
        //     message:
        //         "Account created successfully! You can now log in with your credentials.",
        // });
    } catch (e) {
        console.log(e.message);
        res.status(500).send({
            status: 500,
            message: "Server error",
        });
    }
});

export default SIGNUP;
