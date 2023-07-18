import { useContext } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { Link } from "react-router-dom";


const Products = () => {

  const {darkMode} = useContext(DarkMode);

  return (
        <section className={darkMode ? `contenedor dark` : `contenedor light`}>
            <div className="wrapper-Iner">
                <h1 className="title">Productos</h1>
                <div className="crubs">
                    <Link to="/home" className="crubs_a">Inicio</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Productos</span>
                </div>
            </div>
        </section>
    );
}

export default Products;
