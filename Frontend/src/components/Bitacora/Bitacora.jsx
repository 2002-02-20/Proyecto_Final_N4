import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Bitacora = () => {
  const [registros, setRegistros] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/bitacora")
      .then((response) => response.json())
      .then((data) => setRegistros(data))
      .catch((error) => console.error("Error al obtener registros:", error));
  }, []);

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  const buscarRegistro = (event) => {
    setTerminoBusqueda(event.target.value);
    setPaginaActual(1);
  };

  const registrosFiltrados = registros.filter((registro) => {
    return (
      (registro.id && registro.id.toString().includes(terminoBusqueda)) ||
      (registro.description &&
        registro.description.toLowerCase().includes(terminoBusqueda.toLowerCase())) ||
      (registro.fecha && registro.date.toLowerCase().includes(terminoBusqueda.toLowerCase())) ||
      (registro.hora && registro.hour.includes(terminoBusqueda))
    );
  });

  const registrosPorPagina = 9;
  const totalPaginas = Math.ceil(registrosFiltrados.length / registrosPorPagina);
  const indiceUltimoRegistro = paginaActual * registrosPorPagina;
  const indicePrimerRegistro = indiceUltimoRegistro - registrosPorPagina;
  const registrosActuales = registrosFiltrados.slice(indicePrimerRegistro, indiceUltimoRegistro);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar..."
          value={terminoBusqueda}
          onChange={buscarRegistro}
          className="p-2 border border-gray-300 rounded-md w-64 focus:outline-none"
        />
        <p className="text-gray-600">
          Página {paginaActual} de {totalPaginas}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Descripción</th>
              <th className="px-4 py-2 border-b">Fecha</th>
              <th className="px-4 py-2 border-b">Hora</th>
            </tr>
          </thead>
          <tbody>
            {registrosActuales.map((registro) => (
              <tr key={registro.id} className="bg-white">
                <td className="px-4 py-2 border-b">{registro.id}</td>
                <td className="px-4 py-2 border-b">{registro.description}</td>
                <td className="px-4 py-2 border-b">{registro.date}</td>
                <td className="px-4 py-2 border-b">{registro.hour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
          className={`px-4 py-2 rounded ${
            paginaActual === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Anterior
        </button>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
          className={`ml-4 px-4 py-2 rounded ${
            paginaActual === totalPaginas ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
