import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./components/BarraNavegacion/LayoutAdmin";
import "./App.css";
import { Registrar } from "./components/ParaIniciar/Registrar";
import { CambiarInfo } from "./components/Perfil/CambarInfo";
import Informacion from "./components/Perfil/Informacion";
import { Login } from "./components/ParaIniciar/Login";
import Usuarios from "./components/Usuarios/Usuarios";
import DashBoard from "./components/Usuarios/DashBoard";
import Roll from "./components/Rol/Roll";
import { Bitacora } from "./components/Bitacora/Bitacora";
import Page from "./components/Page/Page";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Register" element={<Registrar />} />


          <Route path="/LayoutAdmin" element={<LayoutAdmin />}>
            <Route path="Informacion-Personal" element={<Informacion />} />
            <Route path="Cambiar-Informacion/:id" element={<CambiarInfo />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="administrar-roles" element={<Roll/>} />
            <Route path="bitacora" element={<Bitacora/>} />
            <Route path="pagina" element={<Page/>} />
          </Route>

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
