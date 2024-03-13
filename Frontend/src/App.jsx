import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./components/BarraNavegacion/LayoutAdmin";
import "./App.css";
import { Structure } from "./components/StructureOpenPage/Structure";
import { Perfil } from "./components/Perfil/Perfil";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import Sidebar from "./components/BarraNavegacion/SideBar";
import Info from "./components/Perfil/Info";
import { Login } from "./components/StructureOpenPage/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Structure.jsx" element={<Structure />} />
          <Route path="/Info.jsx" element={<Info />} />
          <Route path="/Perfil.jsx" element={<Perfil />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
