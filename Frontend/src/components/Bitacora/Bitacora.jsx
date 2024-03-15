import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Bitacora = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/bitacora")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = users.filter((user) => {
    return (
      (user.id && user.id.toString().includes(searchTerm)) ||
      (user.description &&
        user.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.date &&
        user.date.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.hour && user.hour.includes(searchTerm))
    );
  });

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);


  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // No hay un token, redirigir al usuario a la página de inicio de sesión
      navigate("/");
    }
  }, [navigate]);


  return (
    <div className="container mx-auto  py-8">
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md w-64"
        />
        <p className="text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto  w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <td className="px-4 py-2 ">ID</td>
              <td className="px-4 py-2 ">Descripción</td>
              <td className="px-4 py-2 ">Fecha</td>
              <td className="px-4 py-2 ">Hora</td>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="bg-white">
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.description}</td>
                <td className="px-4 py-2 border-b">{user.date}</td>
                <td className="px-4 py-2 border-b">{user.hour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`  px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`ml-4 px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};