import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Importa BrowserRouter y Link desde react-router-dom
// Icons
import {
  RiCustomerService2Line,
  RiMenu3Line,
  RiCloseLine,
  RiMapPin4Fill,
  RiGuideFill,
  RiStackOverflowLine,
  RiMapPin3Line,
  RiLogoutCircleRLine
} from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

 
  /* const handleLogout = () => {
    // Elimina el token de autenticación del localStorage
    localStorage.removeItem("token");
    // Redirige al usuario al inicio de sesión u otra página deseada
    // Puedes usar navigate aquí si estás usando React Router
    window.location.href = "/";
  }; */
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-gray-500 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="mb-10 text-2xl font-bold text-center text-white">
            Administrador<span className="text-4xl text-gray-300">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/LayoutAdmin/Roll"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <RiMapPin3Line className="text-gray-300" />
                Roles
              </Link>
            </li>
            <li>
              <Link
                to="/LayoutAdmin/usuarios"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <RiCustomerService2Line className="text-gray-300" /> Usuarios
              </Link>
            </li>
            <li>
              <Link
                to="/LayoutAdmin/bitacora"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <RiStackOverflowLine className="text-gray-300" /> Bitacora
              </Link>
            </li>
            <li>
              <Link
                to="/LayoutAdmin/pagina"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <RiGuideFill className="text-gray-300" /> Paginas
              </Link>
            </li>
          </ul>
        </div>
        {/* <nav>
          <Link
            to="#"
            onClick={handleLogout} // Llama a la función handleLogout al hacer clic en el enlace
            className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
          >
            <RiLogoutCircleRLine className="text-gray-300" /> Cerrar sesión
          </Link>
        </nav> */}
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed z-50 p-3 text-black rounded-full xl:hidden bottom-4 right-4 bg-[#4791ff]"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
