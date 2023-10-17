import * as React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
    root: {
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--gray-30-)",
            borderRadius: "5rem",
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
                borderColor: "var(--black-60-)",
            },
        },
    },
});

export default function SearchBar() {
    const classes = useStyles();
    return (
        <TextField
            className={classes.root}
            id="outlined-basic"
            label="Search people or message"
            variant="outlined"
            color="success"
            fullWidth
        />
    );
}
