import React, { useEffect } from "react";
import NavBar from "./components/Navbar"; 
import Aos from "aos";
import Tarjeta from "./components/Tarjeta";

function app() {
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="py-20 px-4">
        <Tarjeta />
      </div> 
    </div>
  );
}

export default app;
