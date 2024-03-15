import { useState, useEffect } from "react";
import LanguajeButton from "../LanguajeButton/LanguajeButton";
import MenuButton from "../MenuButton/MenuButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navBar.modules.css";

const NavBar = () => {
    const [menuMobile, setMenuMovile] = useState(true);

    let changeMenuMovile = () => {
        setMenuMovile(!menuMobile);
    };

    return (
        <>
            <div className="navBar">
                <button className="buttonNav" onClick={()=>changeMenuMovile(!menuMobile)}><FontAwesomeIcon icon={faBars} /></button>
                {menuMobile ? (
                    ""
                ) : (
                    <div className="buttonsOpenNav" data-aos="fade-right">
                        <MenuButton />
                        <LanguajeButton />
                        <ThemeButton />
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBar;
