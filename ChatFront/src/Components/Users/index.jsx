import "./users.css";
import Image from "../../assets/Profile.svg";
import React from "react";
import Button from "@mui/material/Button";

const AllUsers = ({ name, userName, newMaessage, userImage, date }) => {
    return (
        <Button
            className="users-chat"
            color="inherit"
            sx={{ padding: ".75rem 1.175rem", borderRadius: "0" }}
        >
            <div className="users-chat-left user-image-container-chat">
                <img
                    className="user-image-chat"
                    src={userImage || Image}
                    alt="user"
                />
            </div>
            <div className="users-chat-center">
                <div className="user-detail-chat">
                    <h4 className="name-chat">{name || "Name Here"}</h4>
                    <p className="username-chat">{userName || "@username"}</p>
                </div>
                <p className="message-chat">
                    {newMaessage || "latest message here :)"}
                </p>
            </div>
            <div className="users-chat-right">
                <p>{date || "Oct 15"}</p>
            </div>
        </Button>
    );
};

export default AllUsers;
