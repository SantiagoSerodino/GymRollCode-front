import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import img from '../../../assets/logoPagina3.png'
import NavItem from './NavItem';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    const [changeButton, setChangeButton] = useState(false);

    const [showNav, setshowNav] = useState(true)
    const location= useLocation()
    useEffect(() => {
        if(location.pathname === '/error'|| location.pathname === '/register'||location.pathname === '/login'){
        setshowNav(false)
        }else{
        setshowNav(true)
        }
    }, [location])

    const toggleButton = () => {
        setChangeButton(!changeButton)
    };
    const toggleMenu = () => {
        changeButton ? nav.classList.remove('visible') : nav.classList.add('visible')
    }
    const toggleFunctions = () => {
        toggleButton();
        toggleMenu();
    }

    return (
        <div className={`navDiv ${!showNav && 'd-none'}`}>
            <img className="logo" src={img} alt="logo"/>
            <button className='openMenu' onClick={toggleFunctions}><i className="bi bi-list"></i></button>

            <nav id="nav" className="nav">
            <button className='closeMenu' onClick={toggleFunctions}><i className="bi bi-x"></i></button>               
                <ul className='navList'>
                    <NavItem texto={"Inicio"}/>
                    <NavItem texto={"Sobre Nosotros"}/>
                    <NavItem texto={"Contáctanos"}/>
                    <NavItem texto={"Iniciar Sesion"}/>
                    <NavItem texto={"Registrarse"}/>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;