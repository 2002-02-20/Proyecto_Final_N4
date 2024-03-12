import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./components/BarraNavegacion/LayoutAdmin";

import "./App.css";
import { Structure } from "./components/StructureOpenPage/Structure";
import { Perfil } from "./components/Perfil/Perfil";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import Sidebar from "./components/BarraNavegacion/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAdmin />} />


{/* <Structure
     tituloRenderizado='Login'
     descripcionPrincipal=''
     btnDescripcion='Login'
     descripcionPaginas='Register'
     />
      <Structure
     tituloRenderizado='Join thousands of learners from around the world'
     descripcionPrincipal='Master web development by marking real-life projects. There are multiple paths for you to choose'
     btnDescripcion='Start coding Now'
     descripcionPaginas='Login'
     /> */}

        </Routes>
      </BrowserRouter>
      
      {/* <Perfil/> */}
      {/* <BarraNavegacion/> */}
    </>
  );
}

export default App;
