import React, { useState, useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import styles from '../estilos/Perfil.module.css'
import styles1 from '../estilos/estilosPaneles.module.css'
import { useFetch } from './useFetch';

function PanelPerfil() {

  const {data, loading, error}=useFetch("https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/"+5857)

  return (
    <div className={styles1.panel}>
      {error && <h3>Error: {error}</h3>}
      {loading && <h3>Cargando informacion...</h3>}
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
      <form >
        <div className={styles.contenedorCampos}>
          <div className={styles.campo}>
            <input className={styles.inputText} type="text" value={data.id_docente} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} type="text" value={data.nombre} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} type="text" value={data.usuario} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} type="email" value={data.correo} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} type="password" value={data.contra} />
          </div>

          <div className={styles.campo}>
            <input className={styles.inputText} type="text" value={data.escuela} />
          </div>
        </div>
        <div className={styles.botones}>
          <div className={styles.botonesL}>
            <button>Guardar</button>
            <button>Generar</button>
          </div>
          <div className={styles.botonesR} > 
            <button onClick={()=>window.open("/inicio","_self")}>Cerrar Sesión</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PanelPerfil
