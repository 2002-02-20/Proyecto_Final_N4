import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Importa BrowserRouter y Link desde react-router-dom
// Icons
import {
   RiLayoutGridLine,
  RiEarthLine,
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-[#0A0A0A] p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="mb-10 text-2xl font-bold text-center text-white">
            Administrador<span className="text-4xl text-[#4791ff]">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <LuLayoutDashboard className="text-[#4791ff]" />
                Roles
              </Link>
            </li>
            <li>
              <Link
                to="/LayoutAdmin/usuarios"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                < RiLayoutGridLine className="text-[#4791ff]" /> Usuarios
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="flex items-center justify-between w-full px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-[#4791ff] " /> Bitacoras
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/categorias"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-[#4791ff] before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white-100 text-white transition-colors hover:text-gray-500"
                  >
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inventario"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-[#4791ff] before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white-100 text-white transition-colors hover:text-gray-500"
                  >
                    Inventario
                  </Link>
                </li>
                 <li>
                  <Link
                    to="/Proveedores"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-[#4791ff] before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white-100 text-white transition-colors hover:text-gray-500"
                  >
                    Proveedores
                  </Link>
                </li> 
              </ul>
            </li>
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <RiCustomerService2Line className="text-[#4791ff]" /> Páginas
              </Link>
            </li>
           
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
          >
            <RiLogoutCircleRLine className="text-[#4791ff]" /> Cerrar sesión
          </Link>
        </nav>
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
   
