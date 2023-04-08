import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../componets/MovieCard";
import {LanguageContext} from "../Context";


const Popular = () => {
    const [popular, setPopular] = useState([])
    const [active, setActive] = useState(1)
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    console.log(language,dark)

    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }

    useEffect(() => {
        getPopular(API_KEY)
    }, [active,language])
    console.log(active)
    return (
        <div id="popular" style={{
            background: dark === true ? "linear-gradient(180deg, rgba(150,152,149,1) 0%, rgba(50,52,49,1) 61%, rgba(69,71,68,1) 100%)" : "linear-gradient(90deg, rgba(175,0,255,1) 10%, rgba(9,198,233,1) 30%, rgba(9,198,233,1) 66%, rgba(176,12,240,1) 90%)"
        }}>
            <div className="container"><h1>Popular</h1>
                <div className="popular">                    {
                    popular.map((el) => {
                        return (
                            <MovieCard el={el}/>
                        )

                    })
                }
                </div>
                <div className="topRated--page">
                    <button onClick={() => {setActive(active - 1)}} style={{background: dark === true ? "red" : "linear-gradient(180deg, rgba(150,152,149,1) 0%, rgba(50,52,49,1) 61%, rgba(69,71,68,1) 100%)"}}>-</button>
                    <h2 style={{color: dark === true ? "white" : "black"}}>{active}{active ? active === -0 : setActive(1)}</h2>
                    <button onClick={() => setActive(active + 1)} style={{background: dark === true ? "red" : "linear-gradient(180deg, rgba(150,152,149,1) 0%, rgba(50,52,49,1) 61%, rgba(69,71,68,1) 100%)"}}>+</button>
                </div>
            </div>
        </div>);
};
export default Popular;