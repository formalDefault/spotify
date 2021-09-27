import React, { useContext } from 'react'
// import Pendientes from './Pendientes'
import { useLocation, NavLink } from 'react-router-dom'
import { ContextStates } from "./context/Estados";   

function vistaTarjeta(props) {

    const { listaProspectos } = useContext(ContextStates);  

    const buscador = (id) => listaProspectos.find(i => i._id === id);

    const useQuery = () => {return new URLSearchParams(useLocation().search);};

    let query = useQuery();

    let tarjeta = buscador(query.get("id"));

    const estilo = 'text-black bg-white py-2 px-4 rounded-md border-b-2 border-yellow-500 shadow-md';
    
    const telefono = () => window.open(`tel:+52${tarjeta.telefono}`);

    const TarjetaEstilo = () => {
        return (
            <div data-aos="zoom-in"> 
                <div className="border-b shadow-xl bg-gray-50 mt-6 p-4 xl:w-8/12 xl:m-auto xl:rounded-2xl xl:border xl:bg-white xl:mt-24">
                    <div className="text-center pb-4">
                        <b>Prospecto</b>
                        <NavLink exact to="/" className="bg-red-500 text-white px-2 rounded-full float-right"><i className=" fas fa-times "></i></NavLink>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="negocio">Nombre del negocio:</label>
                            <div className={estilo}>{tarjeta.nombreNegocio}</div>
                        </div>
                        <div>
                            <label htmlFor="direccion">Dirección:</label>
                            <div className={estilo}>{tarjeta.direccion}</div>
                        </div>
                        <div>
                            <label htmlFor="telefono">Numero de telefono:</label>
                            <div className={estilo}>{tarjeta.telefono}</div> 
                        </div>
                        <div className="flex justify-between mb-6 xl:px-24 xl:mt-8">
                            <button className="bg-red-500 px-2 rounded-2xl text-white ">Rechazado  <i className="fas fa-times"></i></button>
                            <button className="bg-green-500 px-2 rounded-2xl text-white ">Aceptado  <i className="fas fa-check"></i></button>
                        </div>
                        <div onClick={telefono} className="xl:hidden bg-green-600 text-white p-2 w-1/2 rounded-2xl m-auto text-center">
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {TarjetaEstilo()}
        </div>
    )
}

export default vistaTarjeta;