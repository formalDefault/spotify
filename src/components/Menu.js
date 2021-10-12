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
                                    <i className="far fa-calendar-alt float-left"></i>
                                    Pendientes
                                </div>
                        </NavLink>
                    </li>
                    <li className="py-2 px-4" onClick={ocultar}>
                        <NavLink exact to="/prospectos" >
                                <div>
                                    <i className="fas fa-phone float-left"></i>
                                    Prospectos
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
 