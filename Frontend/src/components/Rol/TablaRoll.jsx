import React, { useState, useEffect } from "react";


export const TablaRoll = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/rolls")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    fetch(`http://127.0.0.1:8000/api/rolls/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        } else {
          throw new Error("Error changing roll status");
        }
      })
      .catch((error) => console.error("Error:", error));
  };



  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const formatoFecha = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString();
  };
  
  const filteredUsers = users.filter((user) => {
    return (
      (user.email &&
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.status &&
        user.status.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.created_at && user.created_at.includes(searchTerm)) ||
      (user.roll_id && user.roll_id.toString().includes(searchTerm)) ||
      (user.updated_at && user.updated_at.includes(searchTerm))
    );
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto py-8">
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
    <table className="w-full bg-white border border-gray-200 text-center">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 border-b">ID</th>
          <th className="px-4 py-2 border-b">Nombre</th>
          <th className="px-4 py-2 border-b">Status</th>
          <th className="px-4 py-2 border-b">Creado</th>
          <th className="px-4 py-2 border-b">Actualización</th>
          <th className="px-4 py-2 border-b">Ajustes</th>
        </tr>
      </thead>
      <tbody >
        {currentUsers.map((user) => (
          <tr key={user.id} className="bg-white">
            <td className="px-4 py-2 border-b">{user.id}</td>
            <td className="px-4 py-2 border-b">{user.name}</td>
            <td className="px-4 py-2 border-b">
              <div
                className={`px-2 py-1 rounded-full flex justify-center ${
                  user.status === "active" ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                {user.status}
              </div>
            </td>
            <td className="px-4 py-2 border-b">{formatoFecha(user.created_at)}</td>
            <td className="px-4 py-2 border-b">{formatoFecha(user.updated_at)}</td>
            <td className="px-4 py-2 border-b">
              <button
                onClick={() =>
                  handleStatusChange(
                    user.id,
                    user.status === "active" ? "inactive" : "active"
                  )
                }
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Cambiar Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="flex justify-end mt-4">
    <button
      onClick={() => handleChangePage(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded ${
        currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      Previous
    </button>
    <button
      onClick={() => handleChangePage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`ml-4 px-4 py-2 rounded ${
        currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      Next
    </button>
  </div>
</div>
  );
};