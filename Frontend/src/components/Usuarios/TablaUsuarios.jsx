import React from "react";

export const TablaUsuarios = () => {
  return (
    <>
      <table className="">
        <thead>
          <tr>
            <th>#</th>
            <th>Correo</th>
            <th>Estado</th>
            <th>Fecha de Creación</th>
            <th>Código de Rol</th>
            <th>Última Modificación</th>
            <th>Cambiar de Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>correo@example.com</td>
            <td>Activo</td>
            <td>2024-03-13</td>
            <td>12345</td>
            <td>2024-03-13 15:30:00</td>
            <td>
              <button>Cambiar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
