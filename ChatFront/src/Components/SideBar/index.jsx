import "./sideBar.css";
import SearchBar from "../SearchBar";
import AllUsers from "../Users";
import LogedUser from "../LoggedUser";
import Logo from "../../assets/Logo.svg";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div className="side-bar-input">
                <h1>Messages</h1>
                <SearchBar />
            </div>
            <div className="side-bar-center">
                <div className="all-messages-container">
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                    <AllUsers />
                </div>
            </div>
            <div className="Logged-user-container">
                <LogedUser />
            </div>
        </div>
    );
};

export default SideBar;
