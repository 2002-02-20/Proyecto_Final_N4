import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import Informacion from "./Informacion";

export const CambiarInfo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");
  const [first_LastName, setFirst_LastName] = useState("");
  const [second_LastName, setSecond_LastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("InfoUser");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Datos a enviar al backend
    const data = {
      email: email,
      password: password,
      names: names,
      first_LastName: first_LastName,
      second_LastName: second_LastName,
      birthday: birthday,
    };

    // Solicitud POST al backend
    fetch(`http://127.0.0.1:8000/api/users/${userData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
       
        console.log(data );
        localStorage.setItem("InfoUser", JSON.stringify(data));
        
        setEmail("");
        setPassword("");
        setNames("");
        setFirst_LastName("");
        setSecond_LastName("");
        setBirthday("");

        navigate(`/LayoutAdmin/Cambiar-Informacion/${userData.id}`);
      })
      .catch((error) => {
        console.error("There was an error!", error);
       
      });
      <div className="hidden">
      <Informacion 
      userData1= {data}
      
      />
      </div>
  };
  const navigateCertificacion = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // No hay un token, redirigir al usuario a la página de inicio de sesión
      navigate("/");
    }
  }, [navigateCertificacion]);

  return (
    <>
     <div className="w-[600px] m-auto ">
  <a href="/LayoutAdmin/Informacion-Personal" className="text-sky-500  left-9 top-0 text-left">
    Back
  </a>
  <section className="bg-white rounded-[12px] border border-gray-200 p-8">
    <h2 className="text-2xl font-semibold mb-6">Cambiar Información</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-600 mb-1">
          User/Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Escriba su email..."
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="names" className="text-gray-600 mb-1">
          Nombres
        </label>
        <input
          type="text"
          id="names"
          name="names"
          placeholder="Escriba sus nombres..."
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          autoComplete="off"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="first_LastName" className="text-gray-600 mb-1">
         Primer Apellido
        </label>
        <input
          type="text"
          id="first_LastName"
          name="first_LastName"
          placeholder="Escriba su primer apellido..."
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          autoComplete="off"
          value={first_LastName}
          onChange={(e) => setFirst_LastName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="second_LastName" className="text-gray-600 mb-1">
          Segundo Apellido
        </label>
        <input
          type="text"
          id="second_LastName"
          name="second_LastName"
          placeholder="Escriba su segundo apellido..."
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          autoComplete="off"
          value={second_LastName}
          onChange={(e) => setSecond_LastName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="birthday" className="text-gray-600 mb-1">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          autoComplete="off"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-600 mb-1">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Escriba su contraseña..."
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded"
      >
        Guardar
      </button>
    </form>
   
  </section>
</div>
    </>
  );
};