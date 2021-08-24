import React from 'react'

function Pendientes() {
    const lista = [
      {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasficacion":"descartado","_id":"61241d9c64b0e561s0ba0fda","primeraLlamada":null,"__v":0},
      {"nombreNegocio":"pasteleria","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"llamar al cliente entre las 4 y 5 de la tarde del dia martes 25/08/21","clasficacion":"posible","_id":"61241d9c64b0e561f0ba0fda","primeraLlamada":'24/28/2021',"__v":0}
    ];
    
    const columnas = [
      { id: "1", columna: "Negocio" },
      { id: "2", columna: "Telefono" },
      { id: "3", columna: "Direccion" },
      { id: "4", columna: "Primera llamada" },
      { id: "5", columna: "Segunda llamada" } 
    ];
 
    const TarjetasResponsive = () => {
      return (
        <div>
          <div className=" xl:hidden p-1 grid grid-cols-1 gap-4">
            {lista.map((i) => {
              const rojo = 'bg-red-700 text-white shadow-md w-full p-2 rounded-lg';
              const naranja = 'bg-yellow-500 text-white shadow-md w-full p-2 rounded-lg';
              const normal = 'bg-gray-100 col-span-7 text-left shadow-md w-full p-2 rounded-lg';
              let color;
                if (i.clasficacion == "descartado") {
                  color = rojo;
                } else if (i.clasficacion == "posible") {
                  color = naranja;
                } else {
                  color = normal;
                }
              return (
                <div key={i._id}>
                  <div className={color}>
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
      ) 
    } 

    const Tabla = () => {
      return (
        <div>
          <div className=" xl:grid hidden p-1 grid grid-cols-1 gap-2 xl:grid-cols-7">
            <div className="border-b-2 border-gray-400 col-span-7 grid grid-cols-5 text-center">
              {columnas.map((i) => {
                return (
                  <div key={i.id}>
                    <div className="w-full p-2">
                      <b>{i.columna}</b>
                    </div>
                  </div>
                );
              })}
            </div>
            {lista.map((i) => {
              const rojo = 'bg-red-700 text-white col-span-7  text-center border-b-2 border-grey-200';
              const verde = 'bg-green-500 text-white col-span-7  text-center border-b-2 border-grey-200';
              const normal = 'bg-gray-100 shadow-md col-span-7 text-center border-b-2 border-gray-100';
              let color;
                if (i.clasficacion == "descartado") {
                  color = rojo;
                } else if (i.clasficacion == "posible") {
                  color = verde;
                } else {
                  color = normal;
                }
              return (
                <div key={i._id} className = {color} >
                  <div className="grid grid-cols-5 gap-2 mb-2 w-full p-2">
                    <span>{i.nombreNegocio}</span>
                    <span>{i.telefono}</span>
                    <span>{i.direccion}</span>
                    <span>{i.primeraLlamada}</span>
                    <span>{i.segundaLlamada}</span> 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ); 
    }

    const sinPendientes = () => {
      return(
        <div className="text-gray-400 grid grid-cols-1 grid-row-2 gap-y-4 text-center py-32">
          <i className="text-6xl far fa-laugh-beam"></i>
          <b className="text-2xl">Sin pendientes</b>
        </div>
      )
    }

    return (
      <div> 
        <div className="py-10 text-center text-2xl">
          <b>Pendientes</b>
        </div>
        {sinPendientes()}
      </div>
    ) 
}

export default Pendientes;
