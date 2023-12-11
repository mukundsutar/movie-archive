import React, { useState } from "react";
import "../CSS/LoginPage.css";
import { Navigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
export const loginState = atom(false);

export default function LoginPage({}) {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("123");
    const [auth, setAuth] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [registerDetail, setRegisterDetail] = useState({
        name: "",
        password: "",
    });
    const [loginStateCheck, setLoginState] = useAtom(loginState);

    const user = [{ name: "asd", password: "123" }];

    const handleUserName = (e) => {
        setAuth(false);
        setUserName(e.target.value);
    };

    const handlePassword = (e) => {
        setAuth(false);
        setUserPassword(e.target.value);
    };

    const checkLogin = () => {
        for (let i = 0; i < user.length; i++) {
            if (userName == user[i].name && userPassword == user[i].password) {
                console.log("Accepted");
                setUserName("");
                setRedirect(true);
                setLoginState(true);
            } else {
                setAuth(true);
            }
        }
    };

    // register
    const handleRegisterUserName = (e) => {
        setRegisterDetail.name(user.push({ name: e.target.value }));
    };

    const handleRegisterPassword = (e) => {
        setRegisterDetail.name(user.push({ password: e.target.value }));
    };

    const addLogin = () => {
        user.push(registerDetail);
    };

    return (
        <>
            <div className="login-page-container">
                {redirect && <Navigate to="/" replace={true} />}

                {/* sign in */}
                <div className="login-container">
                    <p className="login-title">
                        <span>FilmPedia</span>
                    </p>
                    <p className="login-text">
                        Welcome back, <span>sign in</span> to continue
                    </p>

                    {auth && (
                        <p className="wrong">
                            Username or Password is incorrect...
                        </p>
                    )}

                    <input
                        className="user-name"
                        type="text"
                        placeholder="User name [hint: asd]"
                        onChange={handleUserName}
                    />
                    <input
                        className="user-pass"
                        type="text"
                        placeholder="Password [hint: 123]"
                        onChange={handlePassword}
                    />

                    <div className="login-button-group">
                        <button className="login-here" onClick={checkLogin}>
                            Login
                        </button>
                        <button className="login-forgot">
                            Forgot Password?
                        </button>
                    </div>
                </div>

                <div className="seperator-container">
                    <div className="seperator"></div>
                </div>

                {/* register */}
                <div className="register-container">
                    <p className="register-text register-text">
                        New here,
                        <br />
                        <span>create account</span> to continue
                    </p>
                    <input
                        className="user-name"
                        type="text"
                        placeholder="User name"
                        onChange={handleRegisterUserName}
                    />
                    <input
                        className="user-pass"
                        type="text"
                        placeholder="Password"
                        onChange={handleRegisterPassword}
                    />
                    <div className="register-button-group">
                        <button className="register-here" onClick={addLogin}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
