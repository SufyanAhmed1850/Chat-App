import "./LoggedUser.css";
import Image from "../../assets/Profile.svg";
// import Dots from "../../assets/dots.svg";
import DotsMenu from "../MUIMenu";

const LogedUser = ({ loggedImage, LoggedName, LoggedUsername }) => {
    return (
        <div className="logged-user">
            <div className="logged-user-image-container">
                <img
                    className="logged-user-image"
                    src={loggedImage || Image}
                    alt="user"
                />
            </div>
            <div className="logged-user-detail">
                <p className="logged-name">{LoggedName || "Name Here"}</p>
                <p className="logged-username">
                    {LoggedUsername || "@username"}
                </p>
            </div>
            <div className="dots-container">
                <DotsMenu />
            </div>
        </div>
    );
};

export default LogedUser;
