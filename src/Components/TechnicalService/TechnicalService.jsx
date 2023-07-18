import { useContext } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { Link } from "react-router-dom";
import './TechnicalService.css';
import radiador  from '../../assets/img/radiador.png';
import mantenimiento  from '../../assets/img/mantenimiento.png';
import asesoria  from '../../assets/img/asesoria.png';
import cards  from '../../assets/img/cards.png';
import Form from "../Form";

const TechnicalService = () => {

    const {darkMode} = useContext(DarkMode);

  return (
        <section className={darkMode ? `contenedor dark` : `contenedor light`}>
            <div className="wrapper-Iner">
                <h1 className="title">Servicio Técnico</h1>
                <div className="crubs">
                    <Link to="/home" className="crubs_a">Inicio</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Servicio Técnico</span>
                </div>
            </div>

          
            <section className="section-services">
                <div className="wrapper">
                    <h2 className="title_section">Portafolio de Servicios</h2>
                    <hr />
                    <div className="cards">
                        <p>Venta y reparación de radiadores</p>
                        <img src={radiador} alt="" />
                    </div>

                    <div className="cards">
                        <p>Mantenimiento preventivo</p>
                        <img src={mantenimiento} alt="" />
                    </div>

                    <div className="cards">
                        <p>Asesoría personalizada</p>
                        <img src={asesoria} alt="" />
                    </div>
                </div>
                <div className="wrapper">
                    <img src={cards} alt="carro" className="img_card"/>
                    <Form/>
                </div>
                
            </section>
        </section>
    );
}

export default TechnicalService;
