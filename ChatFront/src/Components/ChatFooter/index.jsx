import "./ChatFooter.css";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import SendImg from "../../assets/Send.svg";
import UploadImage from "../../assets/Upload Image.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: "#eee",
            borderRadius: "5rem",
        },
        "& .MuiInputLabel-root": {
            color: "#eee",
        },
        // input label when focused
        "& label.Mui-focused": {
            color: "var(--gray-30-)",
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: "var(--gray-30-)",
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: "var(--gray-30-)",
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "var(--gray-30-)",
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

const ChatFooter = () => {
    const classes = useStyles();
    return (
        <div className="chat-footer">
            <IconButton
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                aria-label="delete"
                size="large"
            >
                <img src={UploadImage} alt="upload" />
                <VisuallyHiddenInput
                    type="file"
                    accept="image/png, image/jpeg"
                />
            </IconButton>
            <div className="message-fiel-container">
                <TextField
                    fullWidth
                    className={classes.root}
                    placeholder="Start a new message"
                    size="medium"
                />
            </div>
            <IconButton
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                aria-label="delete"
                size="large"
            >
                <img src={SendImg} alt="send" />
            </IconButton>
        </div>
    );
};

export default ChatFooter;
