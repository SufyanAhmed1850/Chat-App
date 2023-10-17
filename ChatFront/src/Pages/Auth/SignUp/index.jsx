import { useEffect, useRef, useState } from "react";
import AccountLabel from "../../../Components/AccountLabel";
import "./SignUp.css";
import { TextField, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Image from "../../../assets/Profile.svg";
import Show from "../../../assets/show.png";
import Hide from "../../../assets/hide.png";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0 ,0 ,0 ,0.1)",
            borderRadius: ".75rem",
        },
        "& .MuiInputLabel-root": {
            color: "var(--gray-30-)",
        },
        // input label when focused
        "& label.Mui-focused": {
            color: "var(--black-60-)",
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: "var(--black-60-)",
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: "var(--black-60-)",
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "rgba(0,0,0,0.6)",
            },
        },
    },
});

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const SignUp = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const fileRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const handleImage = () => {
        console.log("hello");
        const selectedFile = fileRef.current.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageSrc = event.target.result;
                // Assuming fileRef is a reference to an <input type="file>
                fileRef.current.src = imageSrc;
            };

            reader.readAsDataURL(selectedFile);
        } else {
            console.log("No file selected");
        }
    };

    return (
        <div className="sign-up-container-parent">
            <div className="sign-up-container">
                <h1>Sign Up</h1>
                <IconButton
                    onClick={() => fileRef.current.click()}
                    aria-label="delete"
                    size="small"
                    type="file"
                >
                    <VisuallyHiddenInput
                        onChange={handleImage}
                        ref={fileRef}
                        type="file"
                    />
                    <img className="sign-up-image" src={Image} alt="user" />
                </IconButton>
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    size="medium"
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    size="medium"
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="medium"
                />
                <div className="pass-field-container">
                    <TextField
                        className={classes.root}
                        fullWidth
                        label="Password"
                        helperText="*Password Must Contain Small, Capital Letter, Number and a Special Character"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="medium"
                        type={showPassword ? "text" : "password"}
                    />
                    <IconButton
                        className="eye-btn"
                        sx={{
                            position: "absolute",
                            top: "28px",
                            right: "-12px",
                            transform: "translate(-50%, -50%)",
                            filter: "invert(0.35)",
                            cursor: "pointer",
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                        size="medium"
                    >
                        <img
                            className="eye-btn-img"
                            src={showPassword ? Hide : Show}
                            alt="eye"
                        />
                    </IconButton>
                </div>
                <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                        borderRadius: "5rem",
                        fontWeight: "500",
                        backgroundColor: "var(--green-) !important",
                        color: "var(--white-60-)",
                        boxShadow: "none !important",
                    }}
                    color="inherit"
                >
                    Sign Up
                </Button>
            </div>
            <AccountLabel />
            <div className="sign-in-btn">
                <Button
                    onClick={() => navigate("/auth/signin")}
                    variant="outlined"
                    size="large"
                    fullWidth
                    sx={{
                        borderRadius: "5rem",
                        fontWeight: "500",
                        boxShadow: "none !important",
                    }}
                    color="inherit"
                >
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
