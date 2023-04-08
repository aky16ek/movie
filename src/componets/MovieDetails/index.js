import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";
import Actors from "../Actors";
import Trailer from "../Trailer";
import {LanguageContext} from "../../Context";
const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)
    console.log(language)
    const getDetails = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then((res) => {
                setDetails(res.data)
            })
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
    const {poster_path, title, release_date, overview, runtime, vote_average, backdrop_path, genres} = details
    return (
        <>
            <div id="details" style={{
                background: backdrop_path ? `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}") no-repeat center/cover` : `url("https://aldianews.com/sites/default/files/articles/619306-bg-full-netflix-grid-v2.desktop.jpg") no-repeat center/cover`
            }}>
                <div className="container">
                    <div className="details">
                        <div className="details--img">
                            {poster_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="img"/> : <img src={`https://10play.com.au/ip/s3/2019/08/09/e4b365d10829878d80a0a1871ffeee0b-551003.jpg?image-profile=image_poster&io=portrait&dpr=2${poster_path}`} width={300} alt="img"/>}
                        </div>
                        <div className="details--info"><h1>{title}</h1>
                            <div className="details--info__genres">                            {
                                genres?.map((el) => {
                                    return (
                                        <h4>{el.name}</h4>)
                                })
                            }
                            </div>
                            <h2>{overview}</h2>
                            <h3>Дата выхода: {release_date}</h3>
                            <h3>Длительность: {Math.floor(runtime / 60)}<small>ч</small> {runtime % 60}<small>мин</small>
                            </h3>
                            <div className="details--info__rating">{Math.round(vote_average * 10)}<small>%</small></div>
                        </div>
                    </div>
                </div>
            </div>
            <Actors movieId={movieId}/>
            <Trailer movieId={movieId}/>
        </>);
};
export default MovieDetails;