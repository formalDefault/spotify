import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

function Pendientes() {
    const lista = [
      {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasificacion":"descartado","_id":"61241d9c64b0e561s0ba0fda","primeraLlamada":null,"__v":0},
      {"nombreNegocio":"Taller","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"gdfg","clasificacion":"","_id":"61241d9c650e561s0ba0fda","primeraLlamada":null,"__v":0},
      {"nombreNegocio":"pasteleria","telefono":345345,"direccion":"su puta madre. jal #9","segundaLlamada":null,"recordatorios":"llamar al cliente entre las 4 y 5 de la tarde del dia martes 25/08/21","clasificacion":"posible","_id":"61241d9c64b0e561f0ba0fda","primeraLlamada":'24/28/2021',"__v":0}
    ];   

    const jerarquizacion = (clasificacion) => {
      const rojo = "bg-red-600 text-white ";
      const verde = "bg-green-500 text-white ";
      const normal = "bg-yellow-400 text-white";
      if (clasificacion == "descartado") {
        return rojo;
      } else if (clasificacion == "posible") {
        return verde;
      } else {
        return normal;
      }
    } 

    const Tarjetas = () => {
      return (
        <div className="px-4">
          <div className="p-1 grid grid-cols-1 xl:grid-cols-4 gap-4">
            {lista.map((i) => { 
              let estilo = `duration-500 hover:shadow-2xl cursor-pointer border w-full p-2 rounded-lg ${jerarquizacion(i.clasificacion)}`; 
              let ruta = `/detalles/?type=pendiente&id=${i._id}`;
              return ( 
                <NavLink key={i._id} exact to={ruta}> 
                  <div>
                    <div className={estilo}>
                      <div className="flex justify-between"> 
                        <i className="p-1 fas fa-check"></i>
                        <b>{i.nombreNegocio}</b>  
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      ) 
    }  

    const sinPendientes = () => {  
      if (lista.length != 0) { 
        return (
          <div> 
            {Tarjetas()}
          </div>
        );
      } else {
        return (
          <div className="text-gray-400 grid grid-cols-1 grid-row-2 gap-y-4 text-center py-32">
            <i className="text-6xl far fa-laugh-beam"></i>
            <b className="text-2xl">Sin pendientes</b>
          </div>
        );
      }  
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
