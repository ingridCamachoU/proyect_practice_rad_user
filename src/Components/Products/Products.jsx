import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { Link } from "react-router-dom";
import './Products.css';
import Pagination from "../Pagination";
import sinImagen from '../../assets/img/sin-imagen.jpeg'


const Products = () => {

    const [dataproducts, setDataProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [productsPage, setProductsPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

  const {darkMode} = useContext(DarkMode);

  const urlProduct = "http://localhost:8000/api/v1/products/";

  const totalProducts= dataproducts.length ; 

   const showData = async() =>{
    const response = await fetch(urlProduct)
    const data= await response.json();
    setDataProducts(data)
   }


   const handleChange = (e) =>{
        setSearch(e.target.value)
    };

    const results = !search ? dataproducts : dataproducts.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()) || dato.description.toLowerCase().includes(search.toLocaleLowerCase()) || dato.mark_model.mark.name.toLowerCase().includes(search.toLocaleLowerCase()) || dato.mark_model.name.toLowerCase().includes(search.toLocaleLowerCase()) || dato.category.name.toLowerCase().includes(search.toLocaleLowerCase()) || dato.transmission.toLowerCase().includes(search.toLocaleLowerCase()))

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
            <div className="w-50">
                <input type="text" placeholder="Search" className="form-control mt-4" value={search} onChange={handleChange}/>
            </div>

            <div className="content">
                <div className="filter-box">
                    <div className="box">
                        <h3>Filtro</h3>
                        <p>sasass</p>
                    </div>
                </div>

                <div className="contenedor-product">{
                        results.map( (product) =>( 
                        <div key={product.id} className="product-box">
                            <h4 className="mt-3">{product.name}</h4>
                            <div className="cont-img">
                                <img  className="img-product" src={product?.images.length > 0 ? product?.images : sinImagen} />
                            </div>
                            <p className="mt-2">{product.mark_model.name}({product.mark_model.mark.name})</p>
                        </div>
                    ))}       
                </div>
            </div>
            <Pagination productsPage={productsPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>
        </section> 
    );
}

export default Products;
