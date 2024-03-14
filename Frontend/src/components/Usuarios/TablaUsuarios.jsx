import React, { useState } from 'react';

const Table = () => {
  // Datos de ejemplo para la tabla
  const data = [
    { correo: 'ejemplo1@example.com', estado: 'Activo', fechaCreacion: '2024-03-10', codigoRol: '001', ultimaModificacion: '2024-03-12' },
    { correo: 'ejemplo2@example.com', estado: 'Inactivo', fechaCreacion: '2024-03-08', codigoRol: '002', ultimaModificacion: '2024-03-11' },
    { correo: 'ejemplo3@example.com', estado: 'Activo', fechaCreacion: '2024-03-06', codigoRol: '003', ultimaModificacion: '2024-03-09' },
  ];

  // Estado para manejar el cambio de estado de las filas
  const [rowData, setRowData] = useState(data);

  // Función para cambiar el estado de una fila
  const handleChangeState = (index) => {
    const newData = [...rowData];
    newData[index].estado = newData[index].estado === 'Activo' ? 'Inactivo' : 'Activo';
    setRowData(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Correo</th>
          <th>Estado</th>
          <th>Fecha de Creación</th>
          <th>Código de Rol</th>
          <th>Última Modificación</th>
          <th>Cambiar de Estado</th>
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, index) => (
          <tr key={index}>
            <td>{row.correo}</td>
            <td>{row.estado}</td>
            <td>{row.fechaCreacion}</td>
            <td>{row.codigoRol}</td>
            <td>{row.ultimaModificacion}</td>
            <td>
              <button onClick={() => handleChangeState(index)}>
                Cambiar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;