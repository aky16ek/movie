import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {useParams} from "react-router-dom";
import PersonMovie from "../componets/PersonMovie";
import {LanguageContext} from "../Context";

const ActorDetails = () => {
    const [actorDetails, setActorDetails] = useState([])
    const {personId} = useParams()
    const {language} = useContext(LanguageContext)
    console.log(language)

    const getActorDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
            .then((res) => setActorDetails(res.data))
    }
    useEffect(() => {
        getActorDetails(API_KEY)
    }, [language])
    console.log(actorDetails)

    const {profile_path, name, birthday, also_known_as, biography, place_of_birth} = actorDetails
    return (
        <div id="actorDetails">
            <div className="container">
                <div className="actorDetails">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actorDetails--info">
                        <h1>{name}</h1>
                        <h5>Дата рождения : {birthday}</h5>
                        <h2>{place_of_birth}</h2>
                        <h3> {also_known_as}</h3>

                        <p>{biography}</p>
<PersonMovie personId={personId}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ActorDetails;
//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US