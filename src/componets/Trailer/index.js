import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {LanguageContext} from "../../Context";

const Trailer = ({movieId}) => {
    const [video, setVideo] = useState([])
    const {language} = useContext(LanguageContext)
    console.log(language)

    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=${language}`)
            .then((res) => {
                setVideo(res.data.results)
            })
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [language])
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    {
                        video.map((el) => (
                            <div className="video--card">
                                <iframe width="353" height="280" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="Asl.wav &amp; Miko &amp; Kesha - Magan qaramait (Mood Video)"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;