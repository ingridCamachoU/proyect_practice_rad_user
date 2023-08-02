import { useContext } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { Link } from "react-router-dom";
import company  from '../../assets/img/company.png';
import mision  from '../../assets/img/mision.png';
import vision  from '../../assets/img/vision.png';
import './Us.css';

const Us = () => {

    const {darkMode} = useContext(DarkMode);

  return (
        <section className={darkMode ? `contenedor dark` : `contenedor light`}>
            <div className="wrapper-Iner">
                <h1 className="title">Nosotros</h1>
                <div className="crubs">
                    <Link to="/home" className="crubs_a">Inicio</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Nosotros</span>
                </div>
            </div>

            <div className="section-company">
                <img src={company} alt="" />
            </div>
  
            <div className="p-5"> 
                <div className="p-2 ">
                    <h4 className="pb-2">Autopartes RadCars</h4>
                    <hr className="m-0 hr" />
                    <p className="pt-3">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                </div>

                <div  className="card_us ">
                    <div className="cards">
                        <h5>Misión</h5>
                        <p>Brindar a nuestros clientes el mejor servicio, calidad, variedad y precios de nuestros productos en el sector de refrigeración automotriz; logrando así la satisfacción de necesidades y cumpliendo sus expectativas.</p>
                    </div>
                    <div>
                        <img src={mision} alt="" />
                    </div>
                </div>

                <div className="card_us">
                    <div>
                        <img src={vision} alt="" />
                    </div>
                    <div className="cards">
                        <h5>Visión</h5>
                        <p>Es ser reconocidos a nivel nacional por nuestros clientes y colegas en el sector automotriz, aportando soluciones y herramientas necesarias que nos consoliden como una empresa con productos y servicios de calidad. lograr llegar al mercado nacional, desarrollando canales de distribución e importación, posicionándonos con marca propia y capacitando nuestro personal para una mejora continua.</p>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}

export default Us;
