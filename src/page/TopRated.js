import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../componets/MovieCard";
import {LanguageContext} from "../Context";

const TopRated = () => {
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [topRated, setTopRated] = useState([])
    const [active, setActive] = useState("")
   const {language} = useContext(LanguageContext)
    console.log(language)

    const getTopRated = (key) => {
        // window.scroll(0, 0)

        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }

    useEffect(() => {
        getTopRated(API_KEY)
    }, [active, language])
    console.log(active)
    // window.scroll(0,0)
    return (
        <div id="topRated" style={{
            background: dark === true ? "linear-gradient(180deg, rgba(150,152,149,1) 0%, rgba(50,52,49,1) 61%, rgba(69,71,68,1) 100%)":"linear-gradient(90deg, rgba(175,0,255,1) 10%, rgba(9,198,233,1) 30%, rgba(9,198,233,1) 66%, rgba(176,12,240,1) 90%)"
        }}>
            <div className="container"><h1>Top Rated</h1>
                <div className="topRated">                    {
                    topRated.map((el) => {
                        return (
                            <MovieCard el={el} key={el.id}/>
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
export default TopRated;
