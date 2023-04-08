import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div id="Home">
            <div className="container">
                <div className="home">
                    <h1>Movie Room</h1>
                    <button >
                        <Link to={"/popular"} style={{
                            color: "white"
                        }}>
                            Посмотрет
                           </Link>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Home;