import React from "react";

export const Perfil = () => {
  return (
    <>
      <div className=" w-[600px]">
        <section>
          <a href="/Info.jsx" className="text-sky-500">
            Back
          </a>
          <section className="w-[550px] rounded-[12px] border-gray-200 border-[1px] mt-[10px] px-[40px]">
            <h2 className="text-[24px] mt-[25px]">Change Info</h2>
            {/* <p className="text-[13px] text-gray-500 pt-[7px]">
              Changes will be reflected to every services
            </p> */}
            <form action="./LOGIC/update.php" method="POST">
              <div className="my-[15px]">
                <label htmlFor="name" className="text-gray-600">
                 Usuario/Correo
                </label>
                <br />
                <div className="w-[400px] h-[45px] rounded-[12px] border-[1px] border-gray-200 mt-[5px] items-center flex ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Escriba su correo.."
                    className=" focus:outline-none w-[90%] h-[80%] px-3"
                    autoComplete="off"
                  />
                  <br />
                </div>
              </div>

              <div className="my-[15px]">
                <label htmlFor="name" className="text-gray-600">
                  Nombres
                </label>
                <br />
                <div className="w-[400px] h-[45px] rounded-[12px] border-[1px] border-gray-200 mt-[5px] items-center flex ">
                  <input
                    type="text"
                    id="names"
                    name="names"
                    placeholder="Escriba su nombres.."
                    className=" focus:outline-none w-[90%] h-[80%] px-3"
                    autoComplete="off"
                  />
                  <br />
                </div>
              </div>
              <div className="my-[15px]">
                <label htmlFor="first_LastName" className="text-gray-600">
                Primer Apellido
                </label>
                <br />
                <div className="w-[400px] h-[45px] rounded-[12px] border-[1px] border-gray-200 mt-[5px] items-center flex ">
                  <input
                    type="text"
                    id="first_LastName"
                    name="first_LastName"
                    placeholder="Escriba su primer apellido.."
                    className=" focus:outline-none w-[90%] h-[80%] px-3"
                    autoComplete="off"
                  />
                  <br />
                </div>
              </div>
              <div className="my-[15px]">
                <label htmlFor="second_LastName	" className="text-gray-600">
                  Segundo Apellido
                </label>
                <br />
                <div className="w-[400px] h-[45px] rounded-[12px] border-[1px] border-gray-200 mt-[5px] items-center flex ">
                  <input
                    type="text"
                    id="second_LastName	"
                    name="second_LastName	"
                    placeholder="Escriba su segundo apellido.."
                    className=" focus:outline-none w-[90%] h-[80%] px-3"
                    autoComplete="off"
                  />
                  <br />
                </div>
              </div>
              <div className="my-[15px]">
                <label htmlFor="password" className="text-gray-600">
                  Contraseña
                </label>
                <br />
                <div className="w-[400px] h-[45px] rounded-[12px] border-[1px] border-gray-200 mt-[5px] items-center flex ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Escriba su contraseña.."
                    className=" focus:outline-none w-[90%] h-[80%] px-3"
                    autoComplete="off"
                  />
                  <br />
                </div>
              </div>
              <button
                type="submit"
                className=" w-[82px] h-[38px] rounded-[8px] bg-sky-500 text-white text-[16px] mt-[15px] hover:bg-sky-400 mb-[50px]"
              >
                Save
              </button>
            </form>
          </section>
          <div className="text-[14px] flex justify-between mt-[15px] text-gray-400 ">
            <p>
              created by{" "}
              <a href="#" className="text-gray-600">
                DerekMoscui
              </a>
            </p>
            <p>devChallenges.io</p>
          </div>
        </section>
      </div>
    </>
  );
};
