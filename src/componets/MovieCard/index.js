import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el, id}) => {
    return (
        <div key={el.id} className="popular--card">
            <Link to={`/movie/movie_details/${el.id}`}> <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} style={{
                width:"100%"
            }} alt=""/>
            </Link>
            <h2>{el.title}</h2>
        </div>);
};
export default MovieCard;