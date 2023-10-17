import { useEffect, useRef, useState } from "react";
import AccountLabel from "../../../Components/AccountLabel";
import "./SignIn.css";
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="sign-up-container-parent">
            <div className="sign-up-container">
                <h1>Sign In</h1>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="medium"
                        sx={{
                            width: "100%",
                        }}
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
                    Sign In
                </Button>
            </div>
            <AccountLabel text="Don't have an Account" />
            <div className="sign-in-btn">
                <Button
                    onClick={() => navigate("/auth/signup")}
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
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
