import React, { Component, useState } from 'react'
import '../estilos/Login.css'
import { CiUser } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

function Registrar() { /* Muestra en pantalla la seccion para que el usuario se registre */

  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    if (errors.nombre) {
    }else{
      Swal.fire(data.nombre)
    }
    console.log(errors);
  }
  return (
    <div>
      <div className="login"><a href='/inicio'><CiCircleChevLeft color='#18206F' /></a></div>
      <div className="Login">
        <div className='logoInicio'><CiUser /></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Nombre completo" nombre="nombre" id='nombre' {...register("nombre", { required: true})} />
          <input placeholder="Usuario" name="usuario" id="usuario" {...register("usuario", { required: true})} /><br />
          <input placeholder="Correo electrónico" name="Correo" id="Correo" {...register("correo", { required: true})} />
          <input placeholder="Institución" name="institucion" id="institucion" {...register("institucion", { required: true})} /><br />
          <input placeholder="Contraseña" name="contraseña" id="contraseña" {...register("contra", { required: true})} />
          <input placeholder="Repite contraseña" name="contraseña2" id="contraseña2" {...register("contra2", { required: true})} /><br />
          <button type='submit'>Registrarse</button><br />
        </form>
      </div>
    </div>

  )
}

export default Registrar