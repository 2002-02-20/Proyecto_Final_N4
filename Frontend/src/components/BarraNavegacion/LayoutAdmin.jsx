import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import BarraNavegacion from "./BarraNavegacion";

const LayoutAdmin = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // No hay un token, redirigir al usuario a la página de inicio de sesión
      navigate("/");
    }
  }, [navigate]);


  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <BarraNavegacion />
        <div className="h-[90vh] overflow-y-scroll px-8 pt-[12px] bg-[#F4F4F5]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;