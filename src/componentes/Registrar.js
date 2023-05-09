import React, { Component, useState } from 'react'
import '../estilos/Login.css'
import { CiUser } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import { useForm } from './useForm';

const initialForm = {
  nombre: "",
  usuario: "",
  escuela: "",
  correo: "",
  contra: "",
  contraseña2: ""
}
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.nombre.trim()) {
    errors.nombre = " El nombre es necesario";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = " El nombre sólo acepta letras y espacios en blanco";
  }

  if (!form.usuario.trim()) {
    errors.usuario = " El usuario es necesario";
  } 

  if (!form.correo.trim()) {
    errors.correo = " El correo electronico es necesario";
  } else if (!regexEmail.test(form.correo.trim())) {
    errors.correo = " El correo electronico no es valido";
  }

  if (!form.contra.trim()) {
    errors.contra = " La contraseña es necesaria";
  }else if(form.contra!=form.contraseña2){
    errors.contraseña=" Las contraseñas no coinciden"
  }

  if (!form.contraseña2.trim()) {
    errors.contraseña2 = " El contraseña es necesaria";
  }else if(form.contra!=form.contraseña2){
    errors.contraseña=" Las contraseñas no coinciden"
  }

  return errors;
}

const Registrar = () => { /* Muestra en pantalla la seccion para que el usuario se registre */

  const { form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit2 } = useForm(initialForm, validationsForm);

  return (
    <div>
      <div className="login"><a href='/inicio'><CiCircleChevLeft color='#18206F' /></a></div>
      <div className="Login">
        <div className='logoInicio'><CiUser /></div>
        <form onSubmit={handleSubmit2}>
          <input placeholder="Nombre completo" name="nombre" type='text' onBlur={handleBlur} onChange={handleChange} value={form.nombre} />
          <input placeholder="Usuario" name="usuario" type='text' onBlur={handleBlur} onChange={handleChange} value={form.usuario}  /><br />
          <input placeholder="Institución" name="escuela" type='text' onBlur={handleBlur} onChange={handleChange} value={form.escuela} />
          <input placeholder="Correo electrónico" name="correo" type='text' onBlur={handleBlur} onChange={handleChange} value={form.correo}  /><br />
          <input placeholder="Contraseña" name="contra" type='password' onBlur={handleBlur} onChange={handleChange} value={form.contra}  />
          <input placeholder="Repite contraseña" name="contraseña2" type='password' onBlur={handleBlur} onChange={handleChange} value={form.contraseña2} /><br />
          <button type='submit'>Registrarse</button><br />
        </form>
      </div>
    </div>

  )
}

export default Registrar