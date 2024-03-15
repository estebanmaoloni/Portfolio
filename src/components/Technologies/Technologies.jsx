import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./technologies.modules.css";

const Technologies = () => {

    const { changeLanguaje, changeTheme } = useContext(GlobalContext);

    return (
        <div className="generalContainerTechnologies" data-aos="zoom-in">
            <div className={changeTheme ? "containerTechnologiesText": "containerTechnologiesTextWhite"}>
                {changeLanguaje ? (
                    <div className="descriptionTechnologies">
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Lenguajes de Programación:</p>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Preprocesadores y Frameworks:</p>
                            <li>SASS</li>
                            <li>BOOTSTRAP</li>                            
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Bibliotecas y Frameworks de JavaScript:</p>
                            <li>REACT</li>
                            <li>REACT-ROUTER-DOM</li>                            
                            <li>REACT NATIVE</li>                            
                            <li>UUID</li>                            
                            <li>CONSUMO DE APIS</li>                            
                            <li>FUNCIONES ASINCRONAS</li>                            
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Herramientas y Plataformas:</p>
                            <li>GIT</li>
                            <li>GITHUB</li>                            
                            <li>FIREBASE</li>                                                       
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Otras Tecnologías:</p>
                            <li>VITE</li>
                            <li>EXPO</li>                                                                       
                        </ul>
                    </div>
                ) : (
                    <div className="descriptionTechnologies">
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Programming Languages:</p>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Preprocessors and Frameworks:</p>
                            <li>SASS</li>
                            <li>BOOTSTRAP</li>                            
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>JavaScript Libraries and Frameworks:</p>
                            <li>REACT</li>
                            <li>REACT-ROUTER-DOM</li>                            
                            <li>REACT NATIVE</li>                            
                            <li>UUID</li>                            
                            <li>API CONSUMPTION</li>                            
                            <li>ASYNCHRONOUS FUNCTIONS</li>                            
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Tools and Platforms:</p>
                            <li>GIT</li>
                            <li>GITHUB</li>                            
                            <li>FIREBASE</li>                                                       
                        </ul>
                        <ul className={changeTheme ? "ulStyleTechnologies": "ulStyleTechnologiesWhite"}>
                            <p>Other Technologies:</p>
                            <li>VITE</li>
                            <li>EXPO</li>                                                                       
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Technologies;
