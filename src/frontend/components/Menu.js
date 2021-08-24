import React from 'react'    
import { Link } from "react-scroll"; 

function Menu() {
    const Opciones = () => {
        return(
          <div data-aos="fade-left">
            <div className="bg-black h-screen float-right w-5/12 text-right relative">
                <ul>
                    <li className="py-2 px-4">
                        <Link to="inicio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750} >
                                <div>
                                    <i className="fas fa-home float-left"></i>
                                    Inicio
                                </div>
                        </Link>
                    </li>
                    <li className="py-2 px-4">
                        <Link to="planes"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={750}>
                                <div>
                                    <i className="fas fa-shopping-cart float-left"></i>
                                    Planes
                                </div>
                        </Link>
                    </li>
                    <li className="py-2 px-4">
                        <Link to="contacto"
                            spy={true}
                            smooth={true}
                            offset={200}
                            duration={750}>
                                <div>
                                    <i className="fas fa-phone float-left"></i>
                                    Contacto
                                </div> 
                        </Link>
                    </li>
                </ul>
            </div>  
        </div>  
        )
    }

    return (
        <div>
            {Opciones()}
        </div>
    )
}

export default Menu
 