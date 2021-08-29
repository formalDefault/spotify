import React, {createContext, useState} from 'react' 

const myProvider = (props) => {
    const [state, setState] = useState({});
    return(
        <div>
            <AppContext.Provider value={[state, setState]}>
                {props.children}
            </AppContext.Provider>
        </div>
    );
}

export default myProvider;
export const AppContext = createContext();

