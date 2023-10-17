import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Cookies from "js-cookie";

const App = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     // Get the userToken cookie
    //     const cookie = Cookies.get("userToken");

    //     // Check the presence of the cookie and navigate accordingly
    //     if (!cookie) {
    //         navigate("auth/signup");
    //     }
    // }, []);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:chat" element={<Home />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default App;
