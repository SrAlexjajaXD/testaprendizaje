import React, { useState, useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import styles from '../estilos/Perfil.module.css'
import styles1 from '../estilos/estilosPaneles.module.css'
import { useFetch } from './useFetch';
import { useForm } from './useForm';
import { Switch } from 'react-router-dom'





  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    // if (!regexName.test(form.nombre)) {
    //   errors.nombre = " El nombre sólo acepta letras y espacios en blanco";
    // }

    // if (form.nombre==null) {
    //   errors.usuario = " El usuario es necesario";
    // }

    // if (form.nombre==null) {
    //   errors.correo = " El correo electronico es necesario";
    // } else if (!regexEmail.test(form.correo)) {
    //   errors.correo = " El correo electronico no es valido";
    // }

    // if (form.nombre==null) {
    //   errors.contra = " La contraseña es necesaria";
    // }

    return errors;
  }

function PanelPerfil() {
  const { data, loadingApi, error } = useFetch("https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/" + 5857)

  const initialForm = {
      id_docente: data.id_docente,
      nombre: data.nombre,
      usuario: data.usuario,
      escuela: data.escuela,
      correo: data.correo,
      contra: data.contra
    }

  const { form,
    errors,
    loading,
    response,
    editable,
    handleBlur,
    handleChange,
    handleSubmitPatch } = useForm(initialForm, validationsForm);


  return (
    <div className={styles1.panel}>
      {error && <h3>Error: {error}</h3>}
      {loadingApi && <h3>Cargando informacion...</h3>}
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiUser className={styles1.logoXXL} />
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>{data.nombre} </h1>
          <h3>Docente # {data.id_docente}</h3>
          <h5>{data.escuela}</h5>
        </div>
      </nav>
      <hr color='#18206F' />
      <form onSubmit={handleSubmitPatch}>
        <div className={styles.contenedorCampos}>
          <div className={styles.campo}>
            <input className={styles.inputText} name='id_docente' type="text" value={data.id_docente} onBlur={handleBlur} onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='nombre' type="text" value={data.nombre} onBlur={handleBlur} onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='usuario' type="text" value={data.usuario} onBlur={handleBlur} onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='correo' type="email" value={data.correo} onBlur={handleBlur} onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='contra' type="password" value={data.contra} onBlur={handleBlur} onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='escuela' type="text" value={data.escuela} onBlur={handleBlur} onChange={handleChange} disabled={editable} />
          </div>
        </div>
        <div className={styles.botones}>
          <div className={styles.botonesL}>
            <button type='submit'>{editable && "Editar"}{!editable && "Guardar"}</button>
            <button>Generar</button>
          </div>
          <div className={styles.botonesR} >
            <button onClick={() => window.open("/inicio", "_self")}>Cerrar Sesión</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PanelPerfil
