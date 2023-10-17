import "./Chat.css";
import ChatHeader from "../ChatHeader";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";

const Chat = () => {
    return (
        <div className="chat-window">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    );
};

export default Chat;
