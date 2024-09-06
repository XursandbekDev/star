import React, { useEffect, useState } from "react";
import "./login.css";
import Mountain from "../../assets/Mountain.png";
import StarOne from "../../assets/StarOne.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/home");
        } else {
            navigate("/");
        }
    }, [navigate]);
    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const LoginAdmin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const enteredLogin = formData.get("username");
        const enteredPassword = formData.get("password");

        try {
            const res = await axios.get("https://fakestoreapi.com/users/1");
            const admin = res.data;

            if (
                admin.username === enteredLogin &&
                admin.password === enteredPassword
            ) {
                localStorage.setItem("token", "admin-token");
                navigate("/home");
            } else {
                setError(t("LoginError"));
            }
        } catch (err) {
            console.log(err);
            setError(t("ApiError"));
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className="container">
                <div className="left-section">
                    <div className="top-section">
                        <div className="logo">
                            <div className="logo-left">
                                <img src={StarOne} alt="StarOne Logo " />
                            </div>
                            <div className="logo-right">
                                <h2 translate="no">starone</h2>
                                <div className="text-right">
                                    <p translate="no">in the best one</p>
                                </div>
                            </div>
                        </div>
                        <div className="select-lang">
                            <select
                                onChange={(e) => changeLanguage(e.target.value)}
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>

                    <div className="left-text-container">
                        <h1>{t("Login")}</h1>
                        <div className="left-text">
                            <p>{t("WelcomeBack")}</p>
                            <p>{t("Description")}</p>
                        </div>
                    </div>

                    <form onSubmit={LoginAdmin}>
                        <div className="input-label">
                            <input
                                type="text"
                                name="username"
                                placeholder={t("Username")}
                                required
                            />
                        </div>
                        <div className="input-label">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder={t("Password")}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle-btn"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="icon-btn" />
                                ) : (
                                    <FaEye className="icon-btn" />
                                )}
                            </button>
                        </div>

                        <button type="submit">{t("LoginBtn")}</button>
                    </form>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>

                <div className="right-section">
                    <img
                        src={Mountain}
                        alt="Background-image"
                        className="background-image"
                    />
                </div>
            </div>
        </>
    );
}

export default Login;
