import { useContext } from "react";
import { DarkMode } from "./Context/DarkMode";
import 'bootstrap/dist/css/bootstrap.css';
import './Styles/Styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nabvar from "./Components/Nabvar";
import Footer from "./Components/Footer";
import { Routes, Route } from 'react-router-dom';
import Us from "./Components/Us/Us";
import Products from "./Components/Products/Products";
import ContactUs from "./Components/ContactUs/ContactUs";
import TechnicalService from "./Components/TechnicalService/TechnicalService";
import Home from "./Components/Home";

function App() {

    const {darkMode} = useContext (DarkMode)
    return (
        <div className={darkMode ? `body dark` : `body light`}>
            <header>
                <Nabvar/>
            </header>
            <div className={darkMode ? `container-xxl dark` : `container-xxl light`}>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/Us" element={<Us/>} />
                    <Route path="/Products" element={<Products/>} />
                    <Route path="/TechnicalService" element={<TechnicalService/>} />
                    <Route path="/ContactUs" element={<ContactUs/>} />
                    <Route path="*" element={<div className={darkMode ? `error dark` : `error light`}><h1>404</h1> <h2>File not found</h2></div> } />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
