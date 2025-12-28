import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (username.trim() === "") {
            return;
        }

        // Save user locally
        localStorage.setItem("username", username);
        navigate("/");
    };

    return (
        <div className="login-container">
            <h3>Log in to Reacddit</h3>

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />

                <button type="submit" className="login-button">
                    Log In
                </button>
            </form>

            <Link to={`/`} className="login-link">
                Back to Home
            </Link>
        </div>
    );
};

export default Login;
