import React, { useState } from "react";
import Modal from "react-modal";
import { TablaUsuarios } from "./TablaUsuarios";

const Usuarios = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div className="flex justify-between w-[79%] bg-white text-gray-400 late-300 items-center h-[70px]  rounded-[10px] px-10 my-12 absolute">
      <h2>Informacion de Usuario</h2>
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
        overlayClassName="Overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="w-[410px]  p-[30px] rounded absolute top-[110px] left-[480px] z-40">
            <div className="flex items-center justify-between">
            <h1 className="text-[25px]">Agregar Usuario</h1>
            <button
              onClick={cerrarModal}
              className="bg-gray-100 hover:bg-gray-300  rounded p-[10px]"
            >
             x
            </button>
            </div>
          <form>
            <div className="my-4">
              <label htmlFor="email" className="text-gray-600">
                Correo Electrónico
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Escriba su correo electrónico.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
              />
            </div>

            <div className="my-4">
              <label htmlFor="first_name" className="text-gray-600">
                Primer Nombre
              </label>
              <br />
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Escriba su primer nombre.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
              />
            </div>

            <div className="my-4">
              <label htmlFor="second_name" className="text-gray-600">
                Segundo Nombre
              </label>
              <br />
              <input
                type="text"
                id="second_name"
                name="second_name"
                placeholder="Escriba su segundo nombre.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
              />
            </div>

            <div className="my-4">
              <label htmlFor="first_last_name" className="text-gray-600">
                Primer Apellido
              </label>
              <br />
              <input
                type="text"
                id="first_last_name"
                name="first_last_name"
                placeholder="Escriba su primer apellido.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
              />
            </div>

            <div className="my-4">
              <label htmlFor="second_last_name" className="text-gray-600">
                Segundo Apellido
              </label>
              <br />
              <input
                type="text"
                id="second_last_name"
                name="second_last_name"
                placeholder="Escriba su segundo apellido.."
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
              />
            </div>

            <div className="my-4">
              <label htmlFor="birthday" className="text-gray-600">
                Fecha de Nacimiento
              </label>
              <br />
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
              />
            </div>
            <p className="py-[15px]">La contraseña por defecto de cada usuario sera su <strong>primer apellido</strong>, indicar que debe efectuar un cambio de constraseña individualmente en el apartado de <strong>Editar</strong> en <strong>My Profile</strong></p>
            <button
              onClick={cerrarModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-4"
            >
              Cerrar Modal
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Guardar
            </button>
          </form>
        </div>
      </Modal>
      <div className="absolute">
        <TablaUsuarios/>
        </div>
     
    </>
  );
};

export default Usuarios;
