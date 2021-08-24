import React from 'react'

function Tarjeta() {
    const lista = [
      {"nombreNegocio":"a","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasficacion":"nel","_id":"61241d9c64b0e561f0ba0fda","primeraLlamada":null,"__v":0},
      {"nombreNegocio":"a","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"llamar al cliente entre las 4 y 5 de la tarde del dia martes 25/08/21","clasficacion":"posible","_id":"61241d9c64b0e561f0ba0fda","primeraLlamada":'24/28/2021',"__v":0}
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
              return (
                <div key={i.id}>
                  <div className="bg-blue-600 w-full p-2 rounded-lg">
                    <span>Negocio: {i.columna}</span>
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
            <div className="bg-blue-800 text-white col-span-7 grid grid-cols-5 text-center">
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
              const normal = 'col-span-7  text-center border-b-2 border-grey-200';
              let color;
                if (i.clasficacion == "posible") {
                  color = rojo;
                } else if (i.clasficacion == "nel") {
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

    return (
      <div> 
        {Tabla()}
      </div>
    ) 
}

export default Tarjeta;
