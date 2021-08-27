import React, {useState} from 'react'   
import { Formik, Form, Field, ErrorMessage } from 'formik' //npm i formik --save 
import { NavLink } from 'react-router-dom';  
 
export default function Formulario() {   
    
    const [showMessage, setShowMessage] = useState(false); 

    const Formulario = () => {
        return (
            <Formik 
                //valores de los campos del formulario
                initialValues = {{ 
                    negocio: '',
                    telefono: '',
                    direccion: '',
                    pLlamada: '' ,
                    sLlamada: '' ,
                    recordatorio: '' ,
                    clasificacion: '' 
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
                    return errores;
                }}

                //funcion del boton de enviar
                onSubmit={(valores) => { 
                    console.log(`registrado ${valores}`);
                }}
            >
                {( {errors} ) => (
                <div data-aos="fade-right" className="z-40 "> 
                    {/* <div className="xl:hidden text-white pb-1 px-4 rounded-full border border-yellow-600 relative text-3x text-center float-right top-16 mr-4 "><b>x</b></div> */}
                        <div className="bg-blue-600 pt-20 xl:bg-transparent xl:pt-40 pb-8 w-screen"> 
                            <div className="w-5/6 rounded-2xl text-white bg-black bg-opacity-70 m-auto p-4 shadow-2xl xl:w-4/12 xl:bg-black xl:py-12">
                                {/* <span className="hidden xl:block relative float-right bottom-8 bg-red-500 px-4 pb-1 rounded-full cursor-pointer"><b>x</b></span> */}
                                <div className="text-center mb-4">
                                    <b>Registrar prospecto</b>
                                </div>
                                <Form> 
                                    <div className=" mb-5">
                                        <label htmlFor="Negocio">Negocio:</label>
                                        <Field  
                                            name="negocio"
                                            id="negocio"  
                                            type="text" 
                                            placeholder="Nombre del negocio" 
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
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
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
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
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
                                        />
                                        <ErrorMessage name="direccion" component={() => (<div className="text-red-500">{errors.direccion}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="pLlamada">Fecha de primera llamada:</label>
                                        <Field  
                                            name="pLlamada"
                                            id="pLlamada"  
                                            type="text" 
                                            placeholder="dia/mes/año" 
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
                                        />
                                        <ErrorMessage name="pLlamada" component={() => (<div className="text-red-500">{errors.pLlamada}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="sLlamada">Fecha de segunda llamada:</label>
                                        <Field  
                                            name="sLlamada"
                                            id="sLlamada"  
                                            type="text" 
                                            placeholder="dia/mes/año" 
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
                                        />
                                        <ErrorMessage name="sLlamada" component={() => (<div className="text-red-500">{errors.sLlamada}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="recordatorio">Recordatorio:</label>
                                        <Field  
                                            name="recordatorio"
                                            id="recordatorio"  
                                            type="text" 
                                            placeholder="Recordatorio(opcional)" 
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
                                        />
                                        <ErrorMessage name="recordatorio" component={() => (<div className="text-red-500">{errors.recordatorio}</div>)}/> 
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="estatus">Estatus:</label>
                                        <Field  
                                            name="estatus"
                                            id="estatus"  
                                            as="select"  
                                            className="outline-none text-white bg-black bg-opacity-90 border-b-2 border-yellow-600 rounded-lg w-full h-12 mt-2 px-4"
                                        >
                                            <option value="seguimiento">Seguimiento</option>
                                            <option value="rechazado">Rechazado</option>
                                            <option value="cita">Cita</option>
                                        </Field>
                                        <ErrorMessage name="estatus" component={() => (<div className="text-red-500">{errors.estatus}</div>)}/> 
                                    </div>
                                    <div>

                                    </div>
                                    <button type="submit" className="py-1 w-full rounded-xl px-8 bg-gradient-to-r from-pink-700 to-yellow-500">Enviar mensaje</button>
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
                        <div className="text-white pb-1 px-4 rounded-full bg-red-500 relative text-3x float-right top-0 "><NavLink exact to="/"><b>x</b></NavLink></div> 
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

