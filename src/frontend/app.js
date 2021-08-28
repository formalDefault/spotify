import React, { useEffect } from "react";
import NavBar from "./components/Navbar"; 
import Aos from "aos";
import Pendientes from "./components/Pendientes";
import Prospectos from "./components/Prospectos";
import Formulario from "./components/Formulario";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function app() {
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="py-5 xl:py-16">
        <Switch>
          <Route exact path="/prospectos" component={Prospectos} />
          <Route exact path="/agregar" component={Formulario} />
          <Route exact path="/" component={Pendientes} />
          <Route path="*" component={Pendientes} />
        </Switch>
      </div>
    </Router>
  );
}

export default app;
