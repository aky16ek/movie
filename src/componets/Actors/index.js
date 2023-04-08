import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import logo from  "../../img/boss.jpg"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";

const Actors = ({movieId}) => {
    const [actors, setActors] = useState([])
    const {language} = useContext(LanguageContext)
    console.log(language)

    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`)
            .then((res) => {
                setActors(res.data.cast)
            })
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [language])
    console.log(Actors)



    return (
        <div id="actors">
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actors">
                    {actors.map((el) => (
                        <Link to={`/person/person_details/${el.id}`}>
                            <div className="actors--card">
                                {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`}
                                                        width={150} alt="img"/>
                                    :<img src={logo} width={150} alt="img"/>
                                }
                                <h2 >{el.name}</h2>
                            </div>

                        </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Actors;
//https://www.themoviedb.org/t/p/w300_and_h450_bestv2/
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US