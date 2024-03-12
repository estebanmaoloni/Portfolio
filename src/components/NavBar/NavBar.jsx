import LanguajeButton from "../LanguajeButton/LanguajeButton";
import MenuButton from "../MenuButton/MenuButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./navBar.modules.css";

const NavBar = () => {
    return (
        <>
            <div className="navBar">
                <MenuButton />
                <LanguajeButton />
                <ThemeButton/>
            </div>
        </>
    );
};

export default NavBar;
