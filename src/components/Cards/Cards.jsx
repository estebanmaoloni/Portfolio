import { useContext } from "react";
import "./cards.modules.css";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const Cards = () => {
    const { changeLanguaje } = useContext(GlobalContext);

    return (
        <>
            <div className="cardsContainer">
                {changeLanguaje ? (
                    <>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="900"
                            data-aos-offset="0"
                        >
                            <h2>Descripcion</h2>
                            <p>Resumen de mis datos personales</p>
                            <Link to={`/description`}><button className="buttonCard">Ver mas</button></Link>
                        </div>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="900"
                            data-aos-offset="0"
                        >
                            <h2>Tecnologias</h2>
                            <p>Tecnologias con las que estoy familiarizado</p>
                            <Link to={`/technologies`}><button className="buttonCard">Ver mas</button></Link>
                        </div>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="900"
                            data-aos-offset="0"
                        >
                            <h2>Proyectos</h2>
                            <p>Proyectos realizados como desarrollador</p>
                            <Link to={`/projets`}><button className="buttonCard">Ver mas</button></Link>
                        </div>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="900"
                            data-aos-offset="0"
                        >
                            <h2>Contacto</h2>
                            <p>Redes sociales y medios de comunicacion</p>
                            <Link to={`/contact`}><button className="buttonCard">Ver mas</button></Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="300"
                            data-aos-offset="0"
                        >
                            <h2>Description</h2>
                            <p>Summary of my personal data</p>
                            <Link to={`/description`}><button className="buttonCard">See more</button></Link>
                        </div>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="600"
                            data-aos-offset="0"
                        >
                            <h2>Technologies</h2>
                            <p>Technologies I am familiar with</p>
                            <Link to={`/technologies`}><button className="buttonCard">See more</button></Link>
                        </div>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="900"
                            data-aos-offset="0"
                        >
                            <h2>Projects</h2>
                            <p>Projects carried out as a developer</p>
                            <Link to={`/projets`}><button className="buttonCard">See more</button></Link>
                        </div>
                        <div
                            className="card"
                            data-aos="flip-left"
                            data-aos-delay="1200"
                            data-aos-offset="0"
                        >
                            <h2>Contact</h2>
                            <p>Social networks and media</p>
                            <Link to={`/contact`}><button className="buttonCard">See more</button></Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cards;

