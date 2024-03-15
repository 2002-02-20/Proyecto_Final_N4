import React, { useState, useEffect } from "react";

export const TablaPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pages")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  const buscarUsuario = (event) => {
    setTerminoBusqueda(event.target.value);
    setPaginaActual(1);
  };


  const borrarPagina = (id) => {
    fetch(`http://127.0.0.1:8000/api/pages/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        } else {
          throw new Error("Error deleting page");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const formatoFechaHora = (cadenaFechaHora) => {
    const fechaHora = new Date(cadenaFechaHora);
    return fechaHora.toLocaleString();
  };

  const usuariosFiltrados = usuarios.filter((usuario) => {
    return (
      (usuario.URL && usuario.URL.toLowerCase().includes(terminoBusqueda.toLowerCase())) ||
      (usuario.nombre &&
        usuario.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())) ||
      (usuario.descripcion &&
        usuario.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())) ||
      (usuario.creado_en && usuario.creado_en.includes(terminoBusqueda)) ||
      (usuario.roll_id && usuario.roll_id.toString().includes(terminoBusqueda)) ||
      (usuario.actualizado_en && usuario.actualizado_en.includes(terminoBusqueda))
    );
  });

  const elementosPorPagina = 5;
  const totalPaginas = Math.ceil(usuariosFiltrados.length / elementosPorPagina);
  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const usuariosActuales = usuariosFiltrados.slice(indicePrimerElemento, indiceUltimoElemento);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar..."
          value={terminoBusqueda}
          onChange={buscarUsuario}
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
              <th className="px-4 py-2 border-b">URL</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Descripción</th>
              <th className="px-4 py-2 border-b">Creación</th>
              <th className="px-4 py-2 border-b">Actualización</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosActuales.map((usuario) => (
              <tr key={usuario.id} className="bg-white">
                <td className="px-4 py-2 border-b">{usuario.id}</td>
                <td className="px-4 py-2 border-b">{usuario.URL}</td>
                <td className="px-4 py-2 border-b">{usuario.name}</td>
                <td className="px-4 py-2 border-b">{usuario.description}</td>
                <td className="px-4 py-2 border-b">{formatoFechaHora(usuario.created_at)}</td>
                <td className="px-4 py-2 border-b">{formatoFechaHora(usuario.updated_at)}</td>
                <td className="px-4 py-2 border-b">
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => borrarPagina(usuario.id)}
                  >
                    Borrar
                  </button>
                </td>
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
