import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import movie from "../../img/boss.jpg"
import Trailer from "../Trailer";
import Actors from "../Actors";
import {LanguageContext} from "../../Context";

const PersonMovie = ({personId}) => {
    const [actorMovie, setActorMovie] = useState([])
    const {language} = useContext(LanguageContext)
    console.log(language)

    const getActorMovie = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=${language}`)
            .then((res) => {
                setActorMovie(res.data.cast)
            })
    }
    useEffect(() => {
        getActorMovie(API_KEY)
    }, [language])
    console.log(actorMovie)

    return (
        <>
            <div id="actorMovie">
                <div className="actorMovie">
                    {
                        actorMovie.map((el) => (
                            <div className="actorMovie--card">
                                <Link to={`/movie/movie_details/${el.id}`}>
                                    {el.poster_path ?
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                             width={150} alt=""/>
                                        : <img src={movie} style={{
                                            paddingBottom: "20px"
                                        }} width={150} alt=""/>}
                                </Link>
                                <h4>{el.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Actors />
            <Trailer/>
        </>);
};

export default PersonMovie;