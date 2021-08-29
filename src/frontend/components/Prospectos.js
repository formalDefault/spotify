import React from 'react'
import { NavLink } from 'react-router-dom'

const lista = [
    {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasificacion":"descartado","_id":"61241d9c64b0e561s0ba0fda","primeraLlamada":null,"__v":0},
    {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasificacion":"","_id":"61241d9c650e561s0ba0fda","primeraLlamada":null,"__v":0},
    {"nombreNegocio":"pasteleria","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"llamar al cliente entre las 4 y 5 de la tarde del dia martes 25/08/21","clasificacion":"posible","_id":"61241d9c64b0e561f0ba0fda","primeraLlamada":'24/28/2021',"__v":0}
  ]; 

const barraOpciones = () => {
    return (
      <div data-aos="fade-down" className="fixed bg-white w-screen mt-6 xl:mt-0">
        <div className="grid grid-cols-2 border-b w-screen "> 
          <NavLink exact to="/agregar" className="text-center border-r px-4 py-1 duration-500 hover:text-white hover:bg-yellow-500"><i className="fas fa-plus">Agregar</i></NavLink>
          <div className="text-center px-4 py-1">
            <i className="fas fa-filter">Filtrar</i>
          </div>
        </div>
        <div className="py-2 text-center text-black text-2xl">
          <b>Prospectos</b> 
        </div> 
      </div>
    );
} 

const listaProspectos = () => {
    return (
      <div className="pt-36 px-4">
        <div className="p-1 xl:px-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
          {lista.map((i) => {
            let estilo = `shadow-md w-full p-2 rounded-lg border text-black duration-500 hover:shadow-2xl hover:border-yellow-500 cursor-pointer`;
            let ruta = `/detalles/?id=${i._id}&negocio=${i.negocio}&telefono=${i.telefono}&direccion=${i.direccion}`;
            return (
              <NavLink exact to={ruta} data-aos="zoom-in" key={i._id}>
                <div className={estilo}>
                  <div className="flex justify-between">
                    <b>{i.nombreNegocio}</b> 
                    <h1>{i.telefono}</h1>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
}


function Prospectos() {
    return (
      <div> 
        {barraOpciones()} 
        {listaProspectos()}
      </div>
    );
}

export default Prospectos
