import BasicThreadList from "../components/BasicThreadList";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h3 className="home-title">Welcome to Reacddit!</h3>
            <BasicThreadList
                title="General Discussion"
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
