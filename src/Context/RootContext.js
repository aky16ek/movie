import React,{useState} from "react";
import {LanguageContext} from "./index";



const RootContext = ({children}) => {
    const [language, setLanguage] = useState("en-US")
    const [dark, setDark] = useState(false)
    return(
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            dark,
            setDark
        }}>
            {children}
        </LanguageContext.Provider>
    );
};
export default RootContext;