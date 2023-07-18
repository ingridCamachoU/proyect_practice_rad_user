import logo from '../assets/img/logo.jpeg';
import React, { useContext, useState } from 'react';
import moon from '../assets/img/Moons.png';
import sun from '../assets/img/Sun.png';
import { Link } from "react-router-dom";
import { DarkMode } from '../Context/DarkMode';

const Nabvar = () => {

    const {darkMode, toggleDarkMode} = useContext(DarkMode);

    const handleClick = () => {
        toggleDarkMode();
    };

    const [isOpenToggle, setOpenToggle] = useState(false);

    const toggleMenu= ()=>{
        setOpenToggle(!isOpenToggle)
    };

  return (
        <div className="navbar">

            <div className="ContLogo">
                <img className="img-fluid logo mx-2" src={logo} alt="Logo"/>
            </div>

            <nav className={ `Cabecera-nav ${ isOpenToggle ? 'isActive' : '' }` }>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><Link to='/Home' className="Cabecera-a" onClick={ toggleMenu}>Inicio</Link></li>
                    <li className="Cabecera-li"><Link to='/Us' className="Cabecera-a" onClick={ toggleMenu}>Nosotros</Link></li>
                    <li className="Cabecera-li"><Link to='/Products' className="Cabecera-a" onClick={ toggleMenu}>Productos</Link></li>
                    <li className="Cabecera-li"><Link to='/TechnicalService' className="Cabecera-a" onClick={ toggleMenu}>Servicio Técnico</Link></li>
                    <li className="Cabecera-li"><Link to='/ContactUs' className="Cabecera-a" onClick={ toggleMenu}>Contáctanos</Link></li>
                </ul>
            </nav>

            <div className="search">
                <div className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={ toggleMenu}>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                </div>

                <span className='hr quit'></span>

                <ul className="icons">
                    <li>
                        <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                </ul>  

                <span className='hr'></span>

                <div className=" toogleDark">
                    <img src={darkMode ? 
                    (sun) : (moon)} alt="Lightswitch on" onClick={handleClick}/>          
                </div >
            </div>

        </div>
    );
}

export default Nabvar;

