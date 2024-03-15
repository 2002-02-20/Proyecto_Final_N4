import React, { useState } from "react";
import { Icons } from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

export const Registrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const activarFuncion = (event) => {
    event.preventDefault();

    // Datos a enviar al backend
    const data = {
      email: email,
      password: password,
    };

    
    fetch("http://127.0.0.1:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("El proceso resulto ok");
        }
        return response.json();
      })
      .then((data) => {
   
        
        navigate("/");
      })
      .catch((error) => {
        console.error("Hay un error!", error);
        // Manejar errores de red o errores en el backend
      });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-20">
  <div className="w-full max-w-md rounded-lg border border-gray-200 px-8 py-10">
    <form onSubmit={activarFuncion} className="space-y-6">
      <img src="./public/devchallenges.svg" alt="logo" className="mx-auto w-30" />

      <div className="text-left">
        <h1 className="text-2xl font-bold">
          <strong>Unete a la mejor plataforma para organinar tu información</strong>
        </h1>
        <p className="text-sm text-gray-500 mt-2">
         Podras disfrutar de una interfaz amigable y sencilla, para llevar tus planes al siguiente nivel.
        </p>
      </div>

      <div className="flex items-center border border-gray-200 rounded-lg py-2 px-3">
        <span className="material-symbols-outlined text-gray-500 mr-2">mail</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="off"
          className="w-full focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center border border-gray-200 rounded-lg py-2 px-3">
        <span className="material-symbols-outlined text-gray-500 mr-2">lock</span>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          required
          autoComplete="off"
          className="w-full focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-300"
      >
       ¡Empieza ya!
      </button>

      <div className="text-center text-gray-500 mt-4">
      <p>o continua con una de tus redes sociales</p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <Icons srcIcons="./public/Google.svg" altIcons="google Icon" />
        <Icons srcIcons="./public/Facebook.svg" altIcons="facebook Icon" />
        <Icons srcIcons="./public/Twitter.svg" altIcons="twitter Icon" />
        <Icons srcIcons="./public/Gihub.svg" altIcons="github Icon" />
      </div>

      <div className="text-center text-gray-500 mt-4">
        <p>Ya tienes cuenta? <a href="/" className="text-sky-500 hover:underline">Login</a></p>
      </div>
    </form>
  </div>

  
</section>

    </>
  );
};
export default Registrar;