import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true,
            validate: {
                validator: (value) => {
                    // Use a regular expression to allow only letters (uppercase and lowercase) and spaces
                    return /^[a-zA-Z ]+$/.test(value);
                },
                message: "Full name can only contain letters and spaces",
            },
        },
        userName: {
            type: String,
            minlength: 4,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: (value) => {
                    const regex = /^[\w-.]+@[\w-]+\.[a-z]{2,3}$/;
                    return regex.test(value);
                },
                message: "Email is not valid",
            },
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                    return regex.test(value);
                },
                message: "Password is not valid",
            },
        },
        profile: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    },
);

const User = model("User", userSchema);

export default User;
