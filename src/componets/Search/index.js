import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";

import MovieCard from "../MovieCard";

const Search = () => {
    const [pull, setPull] = useState([])
    const {id} = useParams()
    console.log(id)

    function getPull(key) {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${id}`)
    .then((res) => {
            setPull(res.data.results)
        })
    }

    useEffect(() => {
        getPull(API_KEY)

    }, [id])
    console.log(pull)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        pull.map((el)=> {
                            return (
                                <MovieCard el={el}/>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;