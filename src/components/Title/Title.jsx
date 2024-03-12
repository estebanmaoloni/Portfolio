import React, { useContext } from "react";
import "./title.modules.css";
import { GlobalContext } from "../../context/GlobalContext";

const Title = () => {
    const { changeLanguaje, changeTheme } = useContext(GlobalContext);

    return (
        <>
            <div data-aos="fade-down">
                {changeLanguaje ? (
                    <div className="titlesContaiener">
                        {changeTheme ? <h2 className="title">Esteban Maoloni</h2> : <h2 className="titleChange">Esteban Maoloni</h2>}
                        {changeTheme ? <h3 className="subTitle">Desarrollador Front-End</h3> : <h3 className="subTitleChange">Desarrollador Front-End</h3>}
                    </div>
                ) : (
                    <div className="titlesContaiener">
                        {changeTheme ? <h2 className="title">Esteban Maoloni</h2> : <h2 className="titleChange">Esteban Maoloni</h2>}
                        {changeTheme ? <h3 className="subTitle">Front-End Developer</h3> : <h3 className="subTitleChange">Front-End Developer</h3>}
                    </div>
                )}
            </div>
        </>
    );
};

export default Title;
