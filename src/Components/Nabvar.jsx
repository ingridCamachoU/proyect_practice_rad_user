import logo from '../img/logo.jpeg';
import React, { useContext, useState } from 'react';
import moon from '../img/Moons.png';
import sun from '../img/Sun.png';
import { DarkMode } from '../Context/DarkMode';
import { Link } from "react-router-dom";

const Nabvar = () => {

    const {darkMode, toggleDarkMode} = useContext(DarkMode);

    const handleClick = () => {
        toggleDarkMode();
    };

    const user= ()=>{
        setOpenToggle(!isOpenToggle)
    };

    const [isOpenToggle, setOpenToggle] = useState(false);
  return (
        <nav className="navbar">
            <div className="ContLogo">
                <img className="img-fluid logo mx-2" src={logo} alt="Logo"/>
            </div>

            <div className="menu">
                <Link to='/Nabvar' className={darkMode ? `item dark` : `item light`}>Inicio</Link>
                <Link to='/Us' className={darkMode ? `item dark` : `item light`}>Nosotros</Link>
                <Link to='/Products' className={darkMode ? `item dark` : `item light`}>Productos</Link>
                <Link to='/TechnicalService' className={darkMode ? `item dark` : `item light`}>Servicio Técnico</Link>
                <Link to='/ContactUs' className={darkMode ? `item dark` : `item light`}>Contactenos</Link>    
            </div>
            
            <div className="search" role="search">

                <div className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={user}>
                    <span ></span>
                    <span ></span>
                    <span ></span>

                    <div className={`nav-items ${isOpenToggle &&"openToggle" }`}>
                    <Link to='/' className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={user}>Inicio</Link>
                    <Link to='/Us' className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={user}>Nosotros</Link>
                    <Link to='/Products' className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={user}>Productos</Link>
                    <Link to='/TechnicalService' className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={user}>Servicio Técnico</Link>
                    <Link to='/ContactUs' className={`toggler ${isOpenToggle &&"openToggle" }`} onClick={user}>Contactenos</Link>

                    </div> 
                </div>
                
                <span className='hr'></span>

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
        </nav>
    );
}

export default Nabvar;
