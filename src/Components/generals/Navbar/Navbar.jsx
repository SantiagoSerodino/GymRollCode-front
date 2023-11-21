import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import img from '../../../assets/logoPagina3.png'
import NavItem from './NavItem';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = ({user}) => {

    //Cambio de estado para boton hamburgesa en responsive
    const [changeButton, setChangeButton] = useState(false);

    //Cambio de estado para mostrar u ocultar el nav
    const [showNav, setshowNav] = useState(true)

    //Se instancia location con la funcion useLocation
    const location= useLocation()

    //Se declaran las paginas que no se vera el navbar
    useEffect(() => {
        if(location.pathname === '/error'|| location.pathname === '/register'||location.pathname === '/login'){
        setshowNav(false)
        }else{
        setshowNav(true)
        }
    }, [location])
    
    //FUNCIONES AUXILIARES

    //Funcion para cambiar el valor del boton de true a false
    const toggleButton = () => {
        setChangeButton(!changeButton)
    };
    //Funcion para abrir y cerrar el Modal hamburgesa
    const toggleMenu = () => {
        changeButton ? nav.classList.remove('visible') : nav.classList.add('visible')
    }
    //Funcion para cambiar la funcion del menu hamburgesa y cerrar el mismo
    const toggleFunctions = () => {
        toggleButton();
        toggleMenu();
    };

    //Declaramos admin para poder hacer las condicionales para el boton administración del nav
    const admin = user?.logedUser?.userWhitoutPassword?.admin;
  
    
    //Funcion para Cerrar Sesion
    const handleLogout = () => {
        localStorage.clear();
        History.push('/login');
        
    };


    return (
        <div className={`navDiv ${!showNav && 'd-none'}`}>
            <img className="logo" src={img} alt="logo"/>
            <button className='openMenu' onClick={toggleFunctions}><i className="bi bi-list"></i></button>

            <nav id="nav" className="nav">
            <button className='closeMenu' onClick={toggleFunctions}><i className="bi bi-x"></i></button>               
                <ul className='navList'>
                    <NavItem link={"/"} text={"Inicio"}/>
                    <NavItem link={"/about"}text={"Nosotros"}/>
                    <NavItem link={"/contactanos"}text={"Contáctanos"}/>
                    {!user && <NavItem link={"/login"} text={"Iniciar Sesión"} />}
                    {!user && <NavItem link={"/register"} text={"Registrarse"} />}
                    {admin && <NavItem link={"/admin"} text={"Administración"} />}
                    {user && <NavItem link={"/"} text={"Cerrar Sesión"} click={handleLogout} />}
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;