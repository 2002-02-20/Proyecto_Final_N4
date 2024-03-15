import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Informacion({data}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("InfoUser");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }

    console.log(data);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // No hay un token, redirigir al usuario a la página de inicio de sesión
      navigate("/");
    }
  }, [navigate]);

  
  return (
    <>
     <section className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Información Personal</h2>
        <p className="text-left text-gray-600 mb-8">
         Tu informacion de Perfil
        </p>

        {userData && (
          <div className="w-full max-w-screen-lg rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Perfil
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tu información 
                  </p>
                  
                </div>
                <div>
                  <Link
                    to={`/LayoutAdmin/Cambiar-Informacion/${userData.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-[10px]"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">User / Email</h4>
                <p className="text-gray-600">{userData.email}</p>
              </div>
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Nombres</h4>
                <p className="text-gray-600">{userData.names}</p>
              </div>
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Apellidos</h4>
                <p className="text-gray-600">{userData.first_LastName} {userData.second_LastName}</p>
              </div>
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Fecha de Nacimiento</h4>
                <p className="text-gray-600">{userData.birthday}</p>
              </div>
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Contraseña</h4>
                <p className="text-gray-600">*********</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}