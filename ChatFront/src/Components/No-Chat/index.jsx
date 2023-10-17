import "./NoChat.css";

const NoChat = () => {
    return (
        <div className="no-selected-chat">
            <h1>You don't have a message seleted.</h1>
            <p>Choose one from your existing messages, or start a new one.</p>
        </div>
    );
};

export default NoChat;
