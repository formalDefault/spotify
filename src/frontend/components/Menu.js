import React, {useState} from 'react'    
import { NavLink } from "react-router-dom";  
import { AppContext } from './provider';

function Menu() { 

    const [state, setState] = useContext(AppContext);

    const ocultar = () => {
        
        setState({Menu:current => !current});
    }

    const Opciones = () => {
        return(
          <div data-aos="fade-left">
            <div className="bg-black h-screen float-right w-5/12 text-right relative">
                <ul>
                    <li className="py-2 px-4"  onClick={ocultar}>
                        <NavLink exact to="/" >
                                <div>
                                    <i className="fas fa-home float-left"></i>
                                    Inicio
                                </div>
                        </NavLink>
                    </li>
                    <li className="py-2 px-4" onClick={ocultar}>
                        <NavLink exact to="/prospectos" >
                                <div>
                                    <i className="fas fa-shopping-cart float-left"></i>
                                    Prospectos
                                </div>
                        </NavLink>
                    </li>
                    <li className="py-2 px-4" onClick={ocultar}>
                        <NavLink exact to="/contacto" >
                                <div>
                                    <i className="fas fa-phone float-left"></i>
                                    Contacto
                                </div> 
                        </NavLink>
                    </li>
                </ul>
            </div>  
        </div>  
        )
    }

    return (
        <div>
            {state.Menu ? Opciones() : null}
        </div>
    )
}

export default Menu
 