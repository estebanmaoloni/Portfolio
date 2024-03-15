import "./projets.modules.css"
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Projets = () => {

const { changeLanguaje, changeTheme } = useContext(GlobalContext);

    return (
        <div className="generalContainerProjets" data-aos="zoom-in">
            <div className={changeTheme ? "containerTextProjets" : "containerTextProjetsWhite"}>
                {changeLanguaje ? (
                    <div className="descriptionProjets">
                        <ul className={changeTheme ? "ulStyleProjets" : "ulStyleProjetsWhite"}>
                            <p>Proyectos:</p>
                            <li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/estebanmaoloni?tab=repositories"> GitHub</a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="descriptionProjets">
                        <ul className={changeTheme ? "ulStyleProjets" : "ulStyleProjetsWhite"}>
                            <p>Projets:</p>
                            <li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/estebanmaoloni?tab=repositories"> GitHub</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projets