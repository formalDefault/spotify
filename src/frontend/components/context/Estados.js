import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) {
    const [stateMenu, setStateMenu] = useState(false); 
    const [listaProspectos, setListaProspectos] = useState([])
    return (
        <ContextStates.Provider value={{stateMenu, setStateMenu, listaProspectos, setListaProspectos}}>
            {props.children}
        </ContextStates.Provider>
    )
}

export default Estados;
