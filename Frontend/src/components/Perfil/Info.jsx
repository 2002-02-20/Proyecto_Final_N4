import React from "react";
import "./info.css";

export default function Info() {
  return (
    <>
      <section>
        <h2 class="personalInfo">Personal info</h2>
        <p class="basicInfo">Basic info, like your name and photo</p>
      </section>

      <section>
        <table>
          <thead>
            <th>
              <div>
                <h3 class="thProfile">Profile</h3>
                <p class="thSomeInfo">
                  Some info may be visible to other people
                </p>
              </div>

              <div>
                <a href="./Perfil.jsx">
                  <button class="thBtnEdit">Edit</button>
                </a>
              </div>
            </th>
          </thead>

          <tbody>
            <td class="tdDatosTable">
              <div>
                <h3>NOMBRE</h3>
              </div>
              <div>
                <p></p>
              </div>
            </td>
          </tbody>
          <tbody>
            <td class="tdDatosTable">
              <div>
                <h3>APELLIDO</h3>
              </div>
              <div>
                <p></p>
              </div>
            </td>
          </tbody>
          <tbody>
            <td class="tdDatosTable">
              <div>
                <h3>EMAIL</h3>
              </div>
              <div>
                <p></p>
              </div>
            </td>
          </tbody>
          <tbody>
            <td class="tdDatosTable">
              <div>
                <h3>PASSWORD</h3>
              </div>
              <div>
                <p>******</p>
              </div>
            </td>
          </tbody>
        </table>
      </section>
    </>
  );
}
