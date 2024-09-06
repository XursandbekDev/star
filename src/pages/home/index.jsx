import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate("");
    const Logout = () => {
        localStorage.removeItem("token");
        navigate("/auth");
    };
    return (
        <>
            <div className="home">
                <button onClick={Logout} className="">
                    LOGOUT
                </button>
            </div>
        </>
    );
}

export default Home;
