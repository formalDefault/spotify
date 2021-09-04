import React, { useState } from 'react'    
import { NavLink } from "react-router-dom";   

function Menu(props) { 

    const [state, setState] = useState(props.estado);

    const ocultar = () => { 
        setState(current => !current); 
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
            {state ? <div>{Opciones()}</div> : null} 
        </div>
    )
}

export default Menu
 