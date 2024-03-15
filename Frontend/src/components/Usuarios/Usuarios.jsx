import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { TablaUsuarios } from "./TablaUsuarios";
import { useNavigate } from "react-router-dom";

const Usuarios = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [names, setNames] = useState("");
  const [first_LastName, setFirst_LastName] = useState("");
  const [second_LastName, setSecond_LastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [rollId, setRollId] = useState("");
  const [rolls, setRolls] = useState([]); 

  useEffect(() => {
    Modal.setAppElement("#root");

    fetch("http://127.0.0.1:8000/api/rolls")
      .then((response) => response.json())
      .then((dataRoll) => setRolls(dataRoll))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);
 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);



  const abrirModal = () => {
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      names: names,
      first_LastName: first_LastName,
      second_LastName: second_LastName,
      birthday: birthday,
      roll_id: rollId, 
    };

    fetch("http://127.0.0.1:8000/api/users", {
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
        console.log(data);
        cerrarModal();
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="w-full mx-auto">

      <div className="flex justify-between w-[79%] bg-gray-200 text-white late-300 items-center h-[70px]  rounded-[10px] px-10 my-12 absolute top-12 ">
        <h2 className="text-black">Informacion de Usuario</h2>
        <button
          onClick={abrirModal}
          className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
        >
          Agregar Nuevo Usuario
        </button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={cerrarModal}
        className="Modal"
        style={{
          content: {},
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
        shouldCloseOnOverlayClick={true}
      >
        <div className="w-[410px] h-[90%] bg-gray-100 py-[10px] rounded-[10px] absolute top-[30px] left-[620px] z-40 border border-gray-400  border-box ">
          <div className="flex items-center justify-between py-2 border-b border-b-gray-400 p-6">
            <h1 className="text-[20px] text-gray-400">Agregar Usuario</h1>
            <button
              onClick={cerrarModal}
              className="p-[7px] hover:bg-white rounded flex items-center"
            >
             <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-2 px-6">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Escriba su correo electrónico.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="my-2 px-6">
              <label htmlFor="names" className="text-gray-500">
                Nombres
              </label>
              <br />
              <input
                type="text"
                id="names"
                name="names"
                placeholder="Escriba su primer nombre.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setNames(e.target.value)}
              />
            </div>

            <div className="my-2 px-6">
              <label htmlFor="first_LastName" className="text-gray-500">
                Primer Apellido
              </label>
              <br />
              <input
                type="text"
                id="first_LastName"
                name="first_LastName"
                placeholder="Escriba su primer apellido.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setFirst_LastName(e.target.value)}
              />
            </div>

            <div className="my-2 px-6">
              <label htmlFor="second_LastName" className="text-gray-500">
              Segundo Apellido
              </label>
              <br />
              <input
                type="text"
                id="second_LastName"
                name="second_LastName"
                placeholder="Escriba su segundo apellido.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setSecond_LastName(e.target.value)}
              />
            </div>

            <div className="my-2 px-6">
              <label htmlFor="birthday" className="text-gray-500">
                Fecha de Nacimiento
              </label>
              <br />
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="my-2 px-6">
              <label htmlFor="rollId" className="text-gray-500">
                Rol
              </label>
              <br />
              <select
                id="rollId"
                name="rollId"
                value={rollId}
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setRollId(e.target.value)}
              >
                <option value="">Seleccionar Rol</option>
                {rolls.map((roll) => (
                  <option key={roll.id} value={roll.id}>
                    {roll.name}
                  </option>
                ))}
              </select>
            </div>

            <p className="my-2 px-8 py- text-gray-500">
              La contraseña por defecto de cada usuario será su{" "}
              <strong>primer apellido</strong>, indicar que debe efectuar un
              cambio de contraseña individualmente en el apartado de{" "}
              <strong>Editar</strong> en <strong>My Profile</strong>
            </p>
            <div className="text-right px-10 py-4">

            <button
              onClick={cerrarModal}
              className="bg-gray-300 hover:bg-white text-gray-800 font-semibold py-2 px-4 rounded mr-4"
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Guardar
            </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="absolute w-[79%] top-36 ">
        <TablaUsuarios />
      </div>
    </div>
  );
};

export default Usuarios;