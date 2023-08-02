import { useContext } from "react";
import {DarkMode} from "../../Context/DarkMode"
import { Link } from "react-router-dom";
import './Contact.css';
import men  from '../../assets/img/men.png';
import Form from "../../Components/Form";

const ContactUs = () => {

    const {darkMode} = useContext(DarkMode);

    return (
        <section className={darkMode ? `contenedor dark` : `contenedor light`}>
            <div className="wrapper-Iner">
                <h1 className="title">Contáctanos</h1>
                <div className="crubs">
                    <Link to="/home" className="crubs_a">Inicio</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Contáctanos</span>
                </div>
            </div>

            <section className="section-info">
                <div className="setion-info-form">
                    <Form/>
                </div>

                <div className="setion-info-dat">
                    <img src={men} alt="" />

                    <div className="contact-nformation">
                        <div>
                            <h6><i className="fa-solid fa-location-dot"></i> Nuestro punto de venta</h6>
                            <p>Av 6a # 0-95 La Merced, Cúcuta, Norte de Santander.</p>
                        </div>

                        <div>
                            <h6><i className="fa-solid fa-envelope"></i> Correo Electrónico</h6>
                            <p>radcars-@hotmail.com</p>
                        </div>

                        <div>
                            <h6><i className="fa-solid fa-phone"></i> Atención al Cliente</h6>
                            <p>3216988321</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-ubi">
                <h2 className="text-center">Ubicación</h2>
                <div className="d-flex">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.130561075943!2d-72.5128135883911!3d7.8916540415040055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645d459ed76c7%3A0x27db1d19ad3414b!2sRADIADORES%20GABRIEL-%20RADCARS!5e0!3m2!1ses!2sco!4v1689368657114!5m2!1ses!2sco" width="600" height="450"  loading="lazy" ></iframe>

                    <div className="mx-5 schedule">
                    <h5>Horario de apertura</h5>
                    <p>Lunes a Viernes de 8:00am a 6:00pm</p>
                    <p>Sabado de 8:00am a 2:00pm</p>
                    <p>Domingo y festivos cerrado</p>
                    </div>
                </div>
            </section>              
        </section>

        
    );
}

export default ContactUs;
