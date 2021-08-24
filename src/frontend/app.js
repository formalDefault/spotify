import React, { useEffect } from "react";
import NavBar from "./components/Navbar"; 
import Aos from "aos";
import Pendientes from "./components/Pendientes";

function app() {
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="py-5 xl:py-20 px-4"> 
        <Pendientes />
      </div>
    </div>
  );
}

export default app;
