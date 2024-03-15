import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./descriptionCard.modules.css";

const DescriptionCard = () => {
    
    const { changeLanguaje, changeTheme } = useContext(GlobalContext); 
    
    return (
        <div className="generalContainerCard" data-aos="zoom-in">
            <div className= {changeTheme ? "containerTextCard" : "containerTextCardWhite"}>
                {changeLanguaje ? (<p className={changeTheme ? "descriptionCard" : "descriptionWhite"}>  
                    Mi nombre es Esteban Andrés Maoloni, soy de Argentina, tengo
                    24 años y soy Desarrollador Front-End. Soy una persona muy
                    activa, me adapto muy rápido y tengo muchas ganas de
                    aprender y aplicar mis habilidades adquiridas en mis
                    estudios en una empresa o proyecto. Mi objetivo es crecer
                    como desarrollador en un entorno laboral donde pueda
                    rodearme de personas con mucha experiencia, adquirir nuevos
                    conocimientos, habilidades y crecer tanto personal como
                    profesionalmente. Deseo poder cumplir mis objetivos y ser
                    útil con mis conocimientos adquiridos. Actualmente, continúo
                    mi formación en la plataforma CoderHouse, con miras a
                    convertirme en un Desarrollador Full Stack. ¡Muchas gracias
                    por su tiempo!
                </p>)
                :
                (<p className={changeTheme ? "descriptionCard" : "descriptionWhite"}>
                    My name is Esteban Andrés Maoloni, I am from Argentina, I am
                    24 years old, and I am a Front-End Developer. I am a very
                    active person, I adapt quickly, and I am eager to learn and
                    apply my acquired skills from my studies in a company or
                    project. My goal is to grow as a developer in a work
                    environment where I can surround myself with experienced
                    individuals, acquire new knowledge, skills, and grow both
                    personally and professionally. I strongly desire to achieve
                    my goals and be useful with my acquired learning. Currently,
                    I am continuing my education on the CoderHouse platform, on
                    my way to becoming a Full Stack Developer. Thank you very
                    much for your time!
                </p>)}
            </div>
        </div>
    );
};

export default DescriptionCard;
