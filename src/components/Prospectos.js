import React, {useContext, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { ContextStates } from "./context/Estados";  
import Axios from 'axios';  

function Prospectos() {
  const URL = 'http://localhost:3000';
  const { listaProspectos, setListaProspectos } = useContext(ContextStates);  

  useEffect(() => {
    Axios.get(`${URL}/api/system`)
    .then((response) => {
      setListaProspectos(response.data);
      console.log(response.data);
    }) 
    .catch((error) => {console.log(error);})
  }, []); 

  const barraOpciones = () => {
    return (
      <div
        data-aos="fade-down"
        className="fixed bg-white w-screen mt-6 xl:mt-0"
      >
        <div className="grid grid-cols-2 border-b w-screen ">
          <NavLink
            exact
            to="/agregar"
            className="text-center border-r px-4 py-1 duration-500 hover:text-white hover:bg-yellow-500"
          >
            <i className="fas fa-plus">Agregar</i>
          </NavLink>
          <div className="text-center px-4 py-1">
            <i className="fas fa-filter">Filtrar (proximamente)</i>
          </div>
        </div>
        <div className="py-2 text-center text-black text-2xl">
          <b>Prospectos</b>
        </div>
      </div>
    );
  };

  const listarProspectos = () => {
    return (
      <div className="pt-36 px-4">
        <div className="p-1 xl:px-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
          {listaProspectos.map((i) => {
            let estilo = `shadow-md w-full p-2 rounded-lg border text-black duration-500 hover:shadow-2xl hover:border-yellow-500 cursor-pointer`;
            let ruta = `/detalles/?id=${i._id}`;
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
  };

  return (
    <div> 
      {barraOpciones()} 
      {listarProspectos()}
    </div>
  );
}

export default Prospectos
