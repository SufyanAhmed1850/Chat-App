import "./AccountLabel.css";

const AccountLabel = ({ text }) => {
    return (
        <div className="already-have">
            <div className="already-line"></div>
            <p>{text || "Already Have an Account"}</p>
        </div>
    );
};

export default AccountLabel;
