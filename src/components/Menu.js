import React, { useContext } from 'react'    
import { NavLink } from "react-router-dom";   
import { ContextStates } from './context/Estados';

function Menu() { 

    const { stateMenu, setStateMenu } = useContext(ContextStates);

    const ocultar = () => { 
        setStateMenu(current => !current); 
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
                        <NavLink exact to="/pendientes" >
                                <div>
                                    <i className="fas fa-shopping-cart float-left"></i>
                                    Pendientes
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
            {stateMenu ? <div>{Opciones()}</div> : null} 
        </div>
    )
}

export default Menu
 