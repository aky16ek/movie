import React, {useState} from 'react';
import {FiSearch} from "react-icons/fi";
import {useNavigate} from "react-router-dom";



const Boxes = () => {
    const [search, setSearsh] = useState("")
    const [modal, setModal] = useState(false)
    const nav = useNavigate()
    const func = () => {
        if (search === "") {
            setSearsh(undefined)
        } else {
            setSearsh(search)
        }
    }
    return (
        <div id="box">
            <div className="container">
                <div className="box">
                    <button  onClick={() => {
                        setModal(true)
                        func()
                    }
                    }><FiSearch/></button>
                </div>
                <div className="box--modal" style={{display: modal === true ? "block" : "none"}}>
                    <input onChange={(e)=> {setSearsh(e.target.value)}} type="search" placeholder="Найти фильм"/>
                    <button onClick={()=> {nav(`/movie/search_movie/${search}`)}}>Найти</button>
                    <h1 onClick={() => setModal(false)} style={{color: "#2FACFF", cursor: "pointer"}}>&times;</h1>
                </div>
                <div onClick={() => {
                    setModal(false)
                }
                } className="box--bg__modal" style={{
                    display: modal === true ? "block" : "none",
                    background: "dfece9",
                    backdropFilter: "blur(0.2px)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0"
                }}>
                </div>
            </div>
        </div>
    );
};

export default Boxes;