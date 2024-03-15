import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { TablaPage } from "./TablePage";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [URL, setURL] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    Modal.setAppElement("#root");
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
      URL: URL,
      name: name,
      description: description,
    };

    fetch("http://127.0.0.1:8000/api/pages", {
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
      <h2 className="text-black">Informacion de la Página</h2>
        <button
          onClick={abrirModal}
          className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
        >
         Agregar Nueva Página
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
        <div className="w-[410px] h-[50%] bg-gray-100 py-[10px] rounded-[10px] absolute top-[90px] left-[620px] z-40 border border-gray-400  border-box">
          <div className="flex items-center justify-between py-2 border-b border-b-gray-400 p-6">
            <h1 className="text-[20px] text-gray-400">Agregar Página</h1>
            <button
              onClick={cerrarModal}
              className="p-[7px] hover:bg-white rounded flex items-center"
            >
             <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" my-4 mx-6">
              <label htmlFor="URL" className="text-gray-600">
               URL
              </label>
              <br />
              <input
                type="text"
                id="URL"
                name="URL"
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setURL(e.target.value)}
              />
            </div>

            <div className="my-4 mx-6">
              <label htmlFor="name" className="text-gray-600">
                Nombre
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="my-4 mx-6">
              <label htmlFor="description" className="text-gray-600">
                Descripción
              </label>
              <br />
              <input
                type="text"
                id="description"
                name="description"
                className="focus:outline-none w-full h-10 px-3 border rounded-lg border-gray-300"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="text-right px-10">
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
        <TablaPage/>
      </div>
    </div>
  );
};

export default Page;