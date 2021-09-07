import React, {useState} from 'react'   
import { Formik, Form, Field, ErrorMessage } from 'formik' //npm i formik --save 
import { NavLink } from 'react-router-dom';  
import Axios from 'axios'; 
 
export default function Formulario() {    
    const URL = window.location.origin; 

    const fields = "outline-none text-black bg-white border-b-2 border-blue-600 rounded-lg w-full h-12 mt-2 px-4"

    const Formulario = () => {
        return (
            <Formik 
                //valores de los campos del formulario
                initialValues = {{ 
                    negocio: '',
                    telefono: '',
                    direccion: '',
                    primeraLlamada: '' ,
                    segundaLlamada: '' ,
                    recordatorios: ''  
                }}

                //validacion de los input
                validate = {(valores) => {
                    let errores = {};   
                    
                    //validacion para telefono
                    if (!valores.telefono) {
                        errores.telefono = 'ingresa un numero de telefono para poder contactarte';
                    } else if(!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(valores.telefono)) {
                        errores.telefono = 'Favor de ingresar solo numeros del 0 al 9';
                    } 
                    if(!valores.negocio) { 
                        errores.negocio = 'ingresa un nombre';
                    }
                    if(!valores.direccion) { 
                        errores.direccion = 'ingresa una direccion';
                    } 

                    return errores;
                }}

                //funcion del boton de enviar
                onSubmit={(valores) => {  
                    Axios.post(`${URL}/api/system`,{
                        nombreNegocio: valores.negocio,
                        telefono: valores.telefono,
                        direccion: valores.direccion,
                        primeraLlamada: valores.primeraLlamada,
                        segundaLlamada: valores.segundaLlamada,
                        recordatorios: valores.recordatorios
                    }).then(() => console.log('guardado')); 
                }}
            >
                {( {errors} ) => (
                <div className="z-40 "> 
                        <div data-aos="fade-right" className="pt-20 mb-8">   
                            <div className="w-5/6 border rounded-md text-black m-auto p-4 shadow-xl "> 
                                <NavLink exact to="/"><span className=" relative xl:float-right text-white bg-red-500 px-4 pb-1 rounded-full cursor-pointer"><b>x</b></span></NavLink>
                                <div className="text-center mb-4">
                                    <b>Registrar prospecto</b>
                                </div>
                                <Form className="grid grid-cols-1 xl:grid-cols-3 gap-8 "> 
                                    <div className=" mb-5">
                                        <label htmlFor="Negocio">Negocio:</label>
                                        <Field  
                                            name="negocio"
                                            id="negocio"  
                                            type="text" 
                                            placeholder="Nombre del negocio" 
                                            className={fields}
                                        />
                                        <ErrorMessage name="negocio" component={() => (<div className="text-red-500">{errors.negocio}</div>)}/> 
                                    </div>
                                    <div className=" mb-5">
                                        <label htmlFor="Telefono">Telefono:</label>
                                        <Field  
                                            name="telefono"
                                            id="telefono"  
                                            type="text" 
                                            placeholder="Numero de telefono" 
                                            className={fields}
                                        />
                                        <ErrorMessage name="telefono" component={() => (<div className="text-red-500">{errors.telefono}</div>)}/> 
                                    </div>
                                    <div className=" mb-5">
                                        <label htmlFor="Direccion">Direccion:</label>
                                        <Field  
                                            name="direccion"
                                            id="direccion"  
                                            type="text" 
                                            placeholder="Direccion del negocio" 
                                            className={fields}
                                        />
                                        <ErrorMessage name="direccion" component={() => (<div className="text-red-500">{errors.direccion}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="primeraLlamada">Fecha de primera llamada:</label>
                                        <Field  
                                            name="primeraLlamada"
                                            id="primeraLlamada"  
                                            type="text" 
                                            placeholder="dia/mes/año" 
                                            className={fields}
                                        />
                                        <ErrorMessage name="primeraLlamada" component={() => (<div className="text-red-500">{errors.primeraLlamada}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="sLlamada">Fecha de segunda llamada:</label>
                                        <Field  
                                            name="segundaLlamada"
                                            id="segundaLlamada"  
                                            type="text" 
                                            placeholder="dia/mes/año" 
                                            className={fields}
                                        />
                                        <ErrorMessage name="segundaLlamada" component={() => (<div className="text-red-500">{errors.segundaLlamada}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="recordatorio">Recordatorio:</label>
                                        <Field  
                                            name="recordatorios"
                                            id="recordatorios"  
                                            type="text" 
                                            placeholder="Recordatorio(opcional)" 
                                            className={fields}
                                        />
                                        <ErrorMessage name="recordatorios" component={() => (<div className="text-red-500">{errors.recordatorios}</div>)}/> 
                                    </div>
                                    <div className="xl:col-start-2">
                                        <button type="submit" className="py-1 w-full rounded-xl px-8 bg-blue-600 text-white xl:m-auto">Registrar</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                </div>
                )}
            </Formik>
        )
    }

    const mensaje = () => {
        return (
            <div data-aos="fade-right" className="fixed z-40 ">   
                    <div className="bg-black pt-28 xl:bg-transparent xl:pt-40 pb-8 w-screen"> 
                        <div className="w-5/6 rounded-2xl text-white bg-blue-600  m-auto p-4 shadow-2xl xl:w-4/12 xl:py-6 ">
                        <div className="text-white pb-1 px-4 rounded-full bg-red-500 relative text-3x float-right top-0 "><NavLink exact to="/prospectos"><b>x</b></NavLink></div> 
                            <b>Mensaje enviado</b> 
                        </div>
                    </div>  
            </div>
        )
    }
    
    return (
        <div> 
            {Formulario()} 
        </div>
    )
    
}

