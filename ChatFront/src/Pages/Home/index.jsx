import SideBar from "../../Components/SideBar";
import NoChat from "../../Components/No-Chat";
import Chat from "../../Components/Chat";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const { chat } = useParams();
    const [chatSelected, setChatSelect] = useState(false);
    useEffect(() => {
        chat ? setChatSelect(true) : setChatSelect(false);
    }, [chat]);
    return (
        <>
            <SideBar />
            {chatSelected ? <Chat /> : <NoChat />}
        </>
    );
};

export default Home;
