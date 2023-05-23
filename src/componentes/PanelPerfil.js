import React, { useState, useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import styles from '../estilos/Perfil.module.css'
import styles1 from '../estilos/estilosPaneles.module.css'
import { useFetch } from './useFetch';
import Swal from 'sweetalert2';
import axios from 'axios';



const PanelPerfil =()=> {
  const [editable, setEditable] = useState(true)
  const [datos, setDatos] = useState({})

  const toCancel =()=>{
    window.location.href = "/dashboard"
  }

  const handleLogOut = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.open("/inicio", "_self")
  }

  const soliContra=()=>{
    Swal.fire({icon:"warning", title:"Recuerda tu contraseña", text:"Ten cuidado al cambiar tu contraseña, en caso de ingresar algo en este campo recuerdalo muy bien para no tener problemas con tu futuro inicio de sesión"})
  }

  // const { data, loadingApi, error } = useFetch("http://localhost:3001/docentes/"+localStorage.getItem('id'))
  const { data, loadingApi, error } = useFetch("https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/"+localStorage.getItem('id'))

  const form=data

  const handleSubmit= async (e)=>{
    e.preventDefault()
    setEditable(!editable)


    if (!editable) {
      console.log(datos)
          await axios({
              method: 'PATCH', url: 'https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/'+localStorage.getItem('id'), data: datos 
              // method: 'PATCH', url: 'http://localhost:3001/docentes/'+localStorage.getItem('id'), data: datos              

          })
              .then(function (respuesta) {
                  console.log(respuesta.data);
              }).catch(function (error) {
                  console.log("ERROR EN LA SOLICITUD", error)
              })

          Swal.fire({ icon: "success", title: "Actualización exitosa", text: "Tus datos han sido guardados exitosamente" }).then((result) => {
              if (result.isConfirmed) {
                  window.location.href = "/dashboard"
              }
          })
  }
    

  }
  const handleChange=(e)=>{
    const { name, value } = e.target;

        setDatos({...datos,
            [name]: value,
        });
  }


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
      <form onSubmit={handleSubmit}>
        <div className={styles.contenedorCampos}>
          <div className={styles.campo}>
            <input className={styles.inputText} name='id_docente' type="text" placeholder={data.id_docente} value={datos.id_docente} disabled={true} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='nombre' type="text" placeholder={data.nombre} value={datos.nombre}  onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='usuario' type="text" placeholder={data.usuario} value={datos.usuario}  onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='correo' type="text" placeholder={data.correo} value={datos.correo} onChange={handleChange} disabled={editable} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='contra' type="password" placeholder="*******" value={datos.contra} onChange={handleChange} disabled={editable} onClick={soliContra}/>
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} name='escuela' type="text" placeholder={data.escuela} value={datos.escuela} onChange={handleChange} disabled={editable} />
          </div>
        </div>
        <div className={styles.botones}>
          <div className={styles.botonesL}>
            <button type='submit'>{editable && "Editar"}{!editable && "Guardar"}</button>
            {!editable && <button type='reset' onClick={toCancel}>Cancelar</button>}
          </div>
          <div className={styles.botonesR} >
            {editable && <button onClick={handleLogOut}>Cerrar Sesión</button>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default PanelPerfil
