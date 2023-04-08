import React, {useContext} from "react"
import LOGO from "../../img/mr3.jpg"
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../Context";
import Boxes from "../Boxes";
import {WiDaySunny} from "react-icons/wi";
import {HiMoon} from "react-icons/hi";

const Header = () => {
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setLanguage} = useContext(LanguageContext)
    return (
        <div id="Header" style={{
            background: dark === true ? "linear-gradient(180deg, rgba(150,152,149,1) 0%, rgba(50,52,49,1) 61%, rgba(69,71,68,1) 100%)" : "linear-gradient(0deg, rgba(34, 118, 195, 0.64) 0%, rgba(253, 45, 199, 0.61) 100%)"
        }}>
            <div className="container">
                <div className="header">
                    <img src={LOGO} alt=""/>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link" >Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link" >Popular</NavLink>
                        <NavLink to={"/topRated"} className="header--nav__link" >TopRated</NavLink>
                    </div>
                    <select onChange={(e) => setLanguage(e.target.value)}>
                        <option value="ru-RU">Русский</option>
                        <option value="en-EN">English</option>
                        <option value="fr_FR">France</option>
                    </select>
                    <div className="header--btn">
                        <Boxes/>
                        <button>Sign in</button>
                    </div>
                    <div className="header--dark">
                        <button onClick={() => setDark(false)}><WiDaySunny/></button>
                        <button onClick={() => setDark(true)}><HiMoon/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header