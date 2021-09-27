import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import Menu from './Menu';
import imgs from './img/imagenes'; 
import { ContextStates } from './context/Estados';

export default function NavBar() {

    const { stateMenu, setStateMenu } = useContext(ContextStates);

    const handleChange = () => {
        setStateMenu(current => !current);   
    } 
    const reload = () => {
        window.location.assign('/'); 
    }
    return (
        <div data-aos="fade-down" className="Menu xl:h-16 xl:py-4 fixed h-11 z-50 py-1 w-screen bg-black text-white">  
            <div className="px-4">
                {/* <div className="xl:hidden float-right relative text-2xl"><i onClick={handleChange} className="fas fa-bars iconMenu"></i></div>
                <div className="hidden xl:block float-right">  
                    <NavLink to="/" 
                    className="p-1 cursor-pointer border-b-2 duration-500 hover:border-yellow-500 mr-12 ">
                        Inicio
                    </NavLink> 
                    <NavLink to="/pendientes" 
                    className="p-1 cursor-pointer border-b-2 duration-500 hover:border-yellow-500 mr-12 ">
                        Pendientes
                    </NavLink> 
                </div> */}
                <div className="py-1">
                    <img onClick={reload} src={imgs.Logotipo} className="w-4 cursor-pointer" alt="logotipo_negocio" />   
                </div> 
            </div>
            {stateMenu ? <div className="xl:hidden"><Menu/></div>: null}   
        </div>  
    )
}  