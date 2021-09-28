import React, {useContext, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { ContextStates } from "./context/Estados";  
import Axios from 'axios';  

function Prospectos() {
  const { listaProspectos, setListaProspectos } = useContext(ContextStates);  
  const { APIDATA } = useContext(ContextStates);  
  const [filterOpc, setFilter]  = useState('sin llamar');
  const [showFilter, setShowFilter] =  useState(true); 
  const URL = APIDATA;

  const mostrarFiltro = () => {
    setShowFilter(current => !current)
  }

  useEffect(() => {
    Axios.get(`${URL}/api/system`)
    .then((response) => {
      setListaProspectos(response.data); 
    }) 
    .catch((error) => {console.log(error);})
  }, []); 

  const filtroChange = () => { 
    setFilter(selectFilter.value);
  }

  const barraOpciones = () => {
    return (
      <div
        data-aos="fade-down"
        className="fixed bg-white z-30 w-screen mt-6 xl:mt-0"
      >
        <div className="grid grid-cols-2 border-b w-screen ">
          <NavLink
            exact
            to="/agregar"
            className="text-center border-r px-4 py-1 duration-500 hover:text-white hover:bg-yellow-500"
          >
            <i className="fas fa-plus">Agregar</i>
          </NavLink>
          <div onClick={() => mostrarFiltro()} className="text-center px-4 py-1">
            <i className="fas fa-filter">Filtrar</i>
          </div>
        </div>
        <div className="py-2 text-center text-black text-2xl border-b shadow-md">
          <b>Prospectos</b>
        </div>
        {showFilter ? 
          <div data-aos="fade-right" className=" py-2 px-1 text-center text-sm border-b shadow-md">
            <select 
              className="bg-white border-b text-black px-2 w-9/12" 
              id='selectFilter' 
              value={filterOpc} 
              onChange={filtroChange}
            >
              <option value="sin llamar">Sin llamar</option>
              <option value="Aceptado">Aceptados</option>
              <option value="Rechazado">Rechazados</option>
              <option value="No contesto">No contesto</option>
            </select>
            <div onClick={mostrarFiltro} className="float-right bg-red-500  rounded-xl w-1/12">
              <i className="text-white fas fa-times"></i>
            </div>
          </div>
        :
          null
        }
      </div>
    );
  };

  const listarProspectos = () => {
    let filtroSinLlamar = listaProspectos.filter(prop => prop.estado === filterOpc);
    return (
      <div className="pt-36 px-4">
        <div className="p-1 xl:px-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
          {filtroSinLlamar.map((i) => {
            let estilo = `bg-white shadow-md w-full p-2 rounded xl:rounded-xl border text-black duration-500 hover:shadow-2xl hover:border-yellow-500 cursor-pointer`;
            let ruta = `/detalles/?id=${i._id}`;
            return (
              <NavLink exact to={ruta} key={i._id}>
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
    <div > 
      {barraOpciones()} 
      {listarProspectos()}
    </div>
  );
}

export default Prospectos
