import React from 'react'

const lista = [
    {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasificacion":"descartado","_id":"61241d9c64b0e561s0ba0fda","primeraLlamada":null,"__v":0},
    {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasificacion":"","_id":"61241d9c650e561s0ba0fda","primeraLlamada":null,"__v":0},
    {"nombreNegocio":"pasteleria","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"llamar al cliente entre las 4 y 5 de la tarde del dia martes 25/08/21","clasificacion":"posible","_id":"61241d9c64b0e561f0ba0fda","primeraLlamada":'24/28/2021',"__v":0}
  ]; 

const barraOpciones = () => {
    return (
      <div data-aos="fade-down" className="fixed bg-white w-screen mt-6 shadow-md">
        <div className="grid grid-cols-2 border-b w-screen ">
          <div className="text-center border-r border-gray-600 px-4 py-1">
            <i className="fas fa-plus">Agregar</i>
          </div>
          <div className="text-center border-l border-gray-600 px-4 py-1">
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
        <div className=" xl:hidden p-1 grid grid-cols-1 gap-4">
          {lista.map((i) => {
            let estilo = `shadow-md w-full p-2 rounded-lg bg-gray-100 shadow-md text-black`;
            return (
              <div data-aos="fade-up" key={i._id}>
                <div className={estilo}>
                  <div className="flex justify-between">
                    <b>{i.nombreNegocio}</b>
                    <i className="p-1 fas fa-times"></i>
                  </div>
                </div>
              </div>
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
