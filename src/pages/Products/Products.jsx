import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { Link } from "react-router-dom";
import './Products.css';
import Pagination from "../../Components/Pagination";
import sinImagen from '../../assets/img/sin-imagen.jpeg'


const Products = () => {

    const [dataproducts, setDataProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

  const {darkMode} = useContext(DarkMode);

  const urlProduct = "http://localhost:8000/api/v1/products/";

  const totalProducts= dataproducts.length ; 

   const showData = async() =>{
    const response = await fetch(urlProduct)
    const data= await response.json();
    setDataProducts(data)
   }

   useEffect(()=>{
        showData();
    }, [])

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
    
            <div className="content">
                <div className="filter-box">
                    <div className="box">
                        <h3>Filtro</h3>
                        <p>sasass</p>
                    </div>
                </div>

                <div className="contenedor-product">{
                        dataproducts.map( (product) =>( 
                        <div key={product.id} className="card-product">
                            <div>
                                <h4 className="mt-3">{product.name}</h4>
                            </div>
                            <div className="cont-img">
                                <img  className="img-product" src={product?.images.length > 0 ? product?.images : sinImagen} />
                            </div>
                            <div className="model-card-product">
                                <p className="mt-2">{product.mark_model.name}({product.mark_model.mark.name})</p>
                            </div>                    
                        </div>
                    ))}       
                </div>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>
        </section> 
    );
}

export default Products;
