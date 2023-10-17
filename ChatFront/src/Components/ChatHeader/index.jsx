import "./ChatHeader.css";
import Image from "../../assets/Profile.svg";

const ChatHeader = ({ ChatHeaderImage, ChatName,ChatUserName }) => {
    return (
        <div className="chat-header">
            <div>
                <img
                    className="chat-header-img"
                    src={ChatHeaderImage || Image}
                    alt="user"
                />
            </div>
            <div className="chat-header-body">
                <h1>{ChatName || "Name Here"}</h1>
                <p>{ChatUserName || "@UserName"}</p>
            </div>
        </div>
    );
};

export default ChatHeader;
