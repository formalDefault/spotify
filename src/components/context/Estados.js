import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) {
    const [stateMenu, setStateMenu] = useState(false); 
    const [stateFormulario, setStateFormulario] =  useState(false); 
    const [listaProspectos, setListaProspectos] = useState([]); 
    const [APIDATA] = useState('http://localhost:3000');
    return (
        <ContextStates.Provider value={
            {
                stateMenu, 
                setStateMenu, 
                listaProspectos, 
                setListaProspectos, 
                APIDATA,
                stateFormulario,
                setStateFormulario 
            }}>
            {props.children}
        </ContextStates.Provider>
    )
}

export default Estados;
