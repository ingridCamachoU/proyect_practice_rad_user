import { useContext } from 'react';
import encabezado  from '../../assets/img/encabezado.png';
import { DarkMode } from '../../Context/DarkMode';
import './Home.css';

const Home = () => {

    const {darkMode} = useContext(DarkMode);
  return (
        <section className={darkMode ? `contenedor dark` : `contenedor light`}>
            <div className='encabezado-Home'>
                <img className='img-home' src={encabezado} alt="" />
            </div>
        </section>
    );  
}

export default Home;
