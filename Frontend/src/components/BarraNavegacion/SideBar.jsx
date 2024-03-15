import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Importa BrowserRouter y Link desde react-router-dom
// Icons
import {
  RiCustomerService2Line,
  RiGuideFill,
  RiStackOverflowLine,
  RiMapPin3Line,
} from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh]  fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-gray-500 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="mb-10 text-2xl font-bold text-center text-white">
            Administrador
          </h1>
          <ul>
            <li>
              <Link
                to="/LayoutAdmin/administrar-roles"
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
      </div>
    </>
  );
};

export default Sidebar;
