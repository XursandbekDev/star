import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate("");
    const Logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <>
            <div className="home">
                <button onClick={Logout} className="">
                    LOGOUT
                </button>
                <h2>Tizimga kirdingiz!</h2>
            </div>
        </>
    );
}

export default Home;
