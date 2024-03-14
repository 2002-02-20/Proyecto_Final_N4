import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { TablaRoll } from "./TablaRoll";
import { useNavigate } from "react-router-dom";

const Roll = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const [name, setName] = useState("");
  
  const [rolls, setRolls] = useState([]); 

  useEffect(() => {
    Modal.setAppElement("#root");

    fetch("http://127.0.0.1:8000/api/rolls")
      .then((response) => response.json())
      .then((dataRoll) => setRolls(dataRoll))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);
 

  const abrirModal = () => {
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      
      name: name,
      
    };

    fetch("http://127.0.0.1:8000/api/rolls", {
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

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // No hay un token, redirigir al usuario a la página de inicio de sesión
      navigate("/");
    }
  }, [navigate]);


  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between w-[79%] bg-gray-200 text-white late-300 items-center h-[70px]  rounded-[10px] px-10 my-12 absolute top-12 ">
        <h2 className="text-black">Informacion de Usuario</h2>
        <button
          onClick={abrirModal}
          className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
        >
          Agregar Nuevo Roll
        </button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={cerrarModal}
        className="Modal"
        overlayClassName="Overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="w-[410px] h-[40%] bg-gray-300 py-[10px] px-[20px] rounded absolute top-[90px] left-[580px] z-40">
          <div className="flex items-center justify-between">
            <h1 className="">Agregar Roll</h1>
            <button
              onClick={cerrarModal}
              className="bg-gray-100 hover:bg-gray-300  rounded p-[7px]"
            >
              x
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            

            <div className="my-2">
              <label htmlFor="name" className="text-gray-600">
              Nombre del nuevo Roll
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Escribe el Roll"
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setName(e.target.value)}
              />
            </div>


            <button
              onClick={cerrarModal}
              className="bg-gray-100 hover:bg-white text-gray-800 font-semibold py-2 px-4 rounded mr-4"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
      <div className="absolute w-[79%] top-36 ">
        <TablaRoll />
      </div>
    </div>
  );
};

export default Roll;