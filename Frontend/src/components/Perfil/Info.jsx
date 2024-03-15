import React, { useState, useEffect } from "react";
import "./info.css";
import { Link, useNavigate } from "react-router-dom";

export default function Info({data}) {
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
        <h2 className="text-[36px]">Personal info</h2>
        <p className="text-left mb-[18px]">Basic info, like your name and photo</p>
      

      <section>
      {userData && (
        <table className="w-[850px] ">
          
          <thead className="border">
            <tr className="">
              <th className="flex item-center">
                <div className="flex justify-between flex-col ">
                  <h3 className="text-black text-left">Profile</h3>
                  <p className="text-left text-[13px] text-gray-400">
                    Some info may be visible to other people
                  </p>
                </div>

                <div className="rounded-[12px] bg-slate-300 px-[20px] py-[5px] hover:bg-slate-200">
                  <Link to={`/LayoutAdmin/Perfil/${userData.id}`}>
                    Editar
                  </Link>
                  
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <table>
              <thead className="">
               
                  <tr className="flex  flex-col ">
                    <th className="justify-between border-b text-gray-400">
                      USUARIO / CORREO{" "}
                      <div className="px-[40px] text-black">
                        {userData.email}
                      </div>
                    </th>

                    <th className="justify-between border-b text-gray-400">
                      NOMBRES{" "}
                      <div className="px-[40px] text-black">
                        {userData.names}
                      </div>
                    </th>
                    <th className="justify-between border-b text-gray-400">
                      APELLIDOS{" "}
                      <div className="px-[40px]  text-black">
                        {userData.first_LastName} {userData.second_LastName}
                      </div>
                    </th>

                    <th className="justify-between border-b text-gray-400">
                      FECHA NACIMIENTO{" "}
                      <div className="px-[40px]  text-black">
                        {userData.birthday} 
                      </div>
                    </th>


                    <th className="justify-between border-b text-gray-400">
                      PASSWORD{" "}
                      <div className="px-[40px] text-black">*********</div>
                    </th>
                  </tr>
               
              </thead>
            </table>
          </tbody>
        </table>
        )}
      </section>
      </section>
    </>
  );
}