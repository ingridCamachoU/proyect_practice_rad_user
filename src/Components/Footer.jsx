import logoFooter from '../assets/img/logoFooters.png';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };

  return (

        <footer>
            <img className="img-fluid mx-2 logo" src={logoFooter} alt="Logo Footer" to='/' onClick={toggleHome}/> 

            <p>© 2023 Autopartes Radcars, todos los derechos reservados.</p>   

            <div className='icons'>
                <a href="https://www.facebook.com/profile.php?id=100063876372180" target="_blank"  aria-label="Facebook">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="https://www.instagram.com/radcarscucuta/" target="_blank"  aria-label="instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>     
        </footer>     
    );
}

export default Footer;
