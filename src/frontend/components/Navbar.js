import React, {useState} from 'react' 
import { Link } from "react-scroll"; 
import Menu from './Menu'  

export default function NavBar(props) {
    const [count, setCount] = useState(false);

    const handleChange = () => {
        setCount(current => !current);
    } 
    const reload = () => {
        window.location.assign('/');
    }
    return (
        <div data-aos="fade-down" className="Menu xl:h-auto xl:py-4 xl:bg-opacity-10 fixed h-11 z-50 py-1  w-screen bg-black text-white">  
            <div className="px-4">
                <div className="xl:hidden float-right relative text-2xl"><i onClick={handleChange} className="fas fa-bars iconMenu"></i></div>
                <div className="hidden xl:block float-right">  
                    <Link to="inicio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750} 
                        className="p-1 cursor-pointer border-b-2 duration-500 hover:border-yellow-500 mr-12 ">
                        Inicio
                    </Link> 
                    <Link to="planes"
                        spy={true}
                        smooth={true}
                        offset={-180}
                        duration={750}
                        className="p-1 cursor-pointer border-b-2 duration-500 hover:border-yellow-500 mr-12 ">
                            Planes
                    </Link>
                    <Link to="contacto" 
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                        className="p-1 cursor-pointer border-b-2 duration-500 hover:border-yellow-500 mr-12 ">
                            Contacto
                    </Link> 
                </div>
                <img onClick={reload} src={props.Logotipo} className="w-24 cursor-pointer" alt="logotipo_negocio" />    
            </div>
            {count ? <div className="xl:hidden"><Menu/></div>: null} 
        </div>  
    )
}  