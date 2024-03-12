import React, { useContext, useState } from "react";
import "./themeButton.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../context/GlobalContext";

const ThemeButton = () => {
    
    const {changeTheme, setChangeTheme} = useContext(GlobalContext)

    const changeThemeFunction =()=>{
        setChangeTheme(!changeTheme)
        if (!changeTheme) {
            document.body.classList.remove("bodyWhite")
            document.body.classList.add("body")
        } else {
            document.body.classList.remove("body")
            document.body.classList.add("bodyWhite")    
        }
    }

    return (
        <>
            <div className="containerButtonTheme">
                <button className="buttonTheme" onClick={changeThemeFunction}>
                    {changeTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun}/>}
                </button>
            </div>
        </>
    );
};

export default ThemeButton;