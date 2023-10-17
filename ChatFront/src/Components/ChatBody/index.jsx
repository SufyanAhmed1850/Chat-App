import "./ChatBody.css";
import Image from "../../assets/Profile.svg";
import { useState } from "react";

const ChatBody = () => {
    const [auther, setAuther] = useState("Not Me");
    return (
        <div className="chat-body">
            <div className="left-chat">
                {auther == "Not Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:10 AM</span>
                </div>
            </div>
            <div className="right-chat">
                {auther == "Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:15 AM</span>
                </div>
            </div>
            <div className="left-chat">
                {auther == "Not Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:10 AM</span>
                </div>
            </div>
            <div className="right-chat">
                {auther == "Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:15 AM</span>
                </div>
            </div>
            <div className="left-chat">
                {auther == "Not Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:10 AM</span>
                </div>
            </div>
            <div className="right-chat">
                {auther == "Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:15 AM</span>
                </div>
            </div>
            <div className="left-chat">
                {auther == "Not Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:10 AM</span>
                </div>
            </div>
            <div className="right-chat">
                {auther == "Me" && (
                    <div className="chat-user-image-container">
                        <img
                            className="chat-user-image"
                            src={Image}
                            alt="user"
                        />
                    </div>
                )}
                <div className="message-container">
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <p>next time you'll be awake at this hour why not now</p>
                    <span>Sat 5:15 AM</span>
                </div>
            </div>
        </div>
    );
};

export default ChatBody;
