import BasicThreadList from "../components/BasicThreadList";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");

    const handleSignOut = () => {
        localStorage.removeItem("username");
        navigate("/");
    };

    return (
        <div className="home-container">
            <div className="top-bar">
                <h3>Welcome to Reacddit!</h3>

                {username ? (
                    <div className="user-actions">
                        <span className="user-info">Logged in as {username}</span>
                        <button onClick={handleSignOut} className="signout-button">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="login-link">
                        Log In
                    </Link>
                )}
            </div>

            <BasicThreadList
                title="r/General Discussion"
                threads={[
                    {
                        id: 1,
                        name: "Inspirational Quotes",
                        author: "Aiken",
                    },
                    {
                        id: 2,
                        name: "React Tips",
                        author: "Jamie",
                    },
                ]}
            />
        </div>
    );
};

export default Home;
