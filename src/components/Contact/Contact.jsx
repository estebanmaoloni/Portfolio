import "./contact.modules.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {

    const { changeLanguaje, changeTheme } = useContext(GlobalContext);

    return (
        <div className="generalContainerContact" data-aos="zoom-in">
            <div className={changeTheme ? "containerTextContact" : "containerTextContactWhite"}>
                {changeLanguaje ? (
                    <div className="descriptionContact">
                        <ul className={changeTheme ? "ulStyleContact" : "ulStyleContactWhite"}>
                            <p>Contacto:</p>
                            <li className="noneStyle"><FontAwesomeIcon icon={faEnvelope} /> estenanmaoloni@gmail.com</li>
                            <li><FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/esteban-maoloni"> Linkedin</a></li>
                            <li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/estebanmaoloni?tab=repositories"> GitHub</a></li>
                            <li><FontAwesomeIcon icon={faWhatsapp} /><a href="https://wa.me/543402505659"> WhatsApp</a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="descriptionContact">
                        <ul className={changeTheme ? "ulStyleContact" : "ulStyleContactWhite"}>
                            <p>Contact:</p>
                            <li className="noneStyle"><FontAwesomeIcon icon={faEnvelope} /> estenanmaoloni@gmail.com</li>
                            <li><FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/esteban-maoloni"> Linkedin</a></li>
                            <li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/estebanmaoloni?tab=repositories"> GitHub</a></li>
                            <li><FontAwesomeIcon icon={faWhatsapp} /><a href="https://wa.me/543402505659"> WhatsApp</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
