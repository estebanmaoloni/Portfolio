import React from "react";
import "./menuButton.modules.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const MenuButton = () => {
    return (
        <>
            <div className="containerMenuButton">
                <Link to={'/Portfolio'}><button className="buttonMenu"><FontAwesomeIcon icon={faHouse} /></button></Link>
            </div>
            
        </>
    );
};

export default MenuButton;
