import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
    <div className=" w-[100%] bg-white  text-gray-400   items-center h-[20%]  rounded-[10px] px-8 my-12 ">
        <h2 className='pt-[1%] text-xl font-semibold mb-1'  >Bienvenido</h2>
        <p>Seleccione la accion que quiera realizar en la linea izquierda</p>
       
      </div>
       
       </>
  )
}