import { useContext, useState } from "react";
import "./languajeButton.modules.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from "../../context/GlobalContext";

const LanguajeButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { changeLanguaje, setChangeLanguaje } = useContext(GlobalContext);

    const changeLanguageSpanish = () => {
        setChangeLanguaje(true);
        setIsOpen(false);
    };

    const changeLanguageInglish = () => {
        setChangeLanguaje(false);
        setIsOpen(false);
    };

    return (
        <>
            <div className="containerCenter">
                <div className="language-selector">
                    <button
                        className="language-selector-btn"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon icon={faEarthAmericas} />
                    </button>
                    {isOpen && (
                        <div className="language-selector-menu">
                            <ul>
                                {changeLanguaje ? <li onClick={changeLanguageSpanish}>Español</li> : <li onClick={changeLanguageSpanish}>Spanish</li>}
                                {changeLanguaje ? <li onClick={changeLanguageInglish}>Inglés</li> : <li onClick={changeLanguageInglish}>Inglish</li>}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default LanguajeButton;
