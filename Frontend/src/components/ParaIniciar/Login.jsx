import React, { useState } from "react";
import { Icons } from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
      user: user,
    };

    fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
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
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("InfoUser", JSON.stringify(data.user));
        navigate("/LayoutAdmin/DashBoard");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-20">
        <div className="w-full max-w-md rounded-lg border border-gray-200 px-8 py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <img
              src="./public/devchallenges.svg"
              alt="logo"
              className="mx-auto w-30"
            />

            <h1 className="text-2xl font-bold text-left">Login</h1>

            <div className="flex items-center border border-gray-200 rounded-lg py-2 px-3">
              <span className="material-symbols-outlined text-gray-500 mr-2">
                mail
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-200 rounded-lg py-2 px-3">
              <span className="material-symbols-outlined text-gray-500 mr-2">
                lock
              </span>
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>

            <div className="text-center text-gray-500">
              <p>o continua con una de tus redes sociales</p>
            </div>

            <div className="flex justify-center space-x-4">
              <Icons srcIcons="./public/Google.svg" altIcons="google Icon" />
              <Icons
                srcIcons="./public/Facebook.svg"
                altIcons="facebook Icon"
              />
              <Icons srcIcons="./public/Twitter.svg" altIcons="twitter Icon" />
              <Icons srcIcons="./public/Gihub.svg" altIcons="github Icon" />
            </div>

            <div className="text-center text-gray-500">
              <p>
                Aun no tienes cuenta?{" "}
                <a href="/Register" className="text-blue-500 hover:underline">
                  Registrar
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
