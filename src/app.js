import React, { useEffect, useContext } from "react";
import NavBar from "./components/Navbar";
import Aos from "aos";
import Pendientes from "./components/Pendientes";
import Prospectos from "./components/Prospectos";
import Formulario from "./components/Formulario";
import vistaTarjeta from "./components/vistaTarjeta";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextStates from "./components/context/Estados";     

function app() {   
  useEffect(() => {
    Aos.init({ duration: 650 });  
  }, []); 

  return (
    <ContextStates>  
      <Router>
        <NavBar />
        <div className="py-5 xl:py-16">
          <Switch> 
              <Route exact path="/pendientes" component={Pendientes} />
              <Route exact path="/agregar" component={Formulario} />
              <Route exact path="/detalles/" component={vistaTarjeta} />
              <Route exact path="/" component={Prospectos} />
              <Route path="*" component={Prospectos} /> 
          </Switch> 
        </div>
      </Router> 
    </ContextStates>
  );
}

export default app;
