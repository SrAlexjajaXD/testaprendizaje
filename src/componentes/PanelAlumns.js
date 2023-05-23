import React, { useState } from 'react'
import { CiFaceSmile } from "react-icons/ci";
import styles1 from '../estilos/estilosPaneles.module.css'
import axios from 'axios';
import { useFetch } from './useFetch';

function PanelAlumns() {


  const [datas, setdatas] = useState(null)

  axios.get("https://nodejs-restapi-test-mysql-production.up.railway.app/alumnos/"+localStorage.getItem("id")).then(response=>{
    setdatas(response.data)
  })

  const { data, loadingApi, error } = useFetch("https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/"+localStorage.getItem('id'))


    // axios.get("http://localhost:3001/alumnos/"+localStorage.getItem("id")).then(response=>{
    //   setdatas(response.data)
    // })

    // const { data, loadingApi, error } = useFetch("http://localhost:3001/docentes/"+localStorage.getItem('id'))


  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiFaceSmile className={styles1.logoXXL} />
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Alumnos</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>{data.nombre}</h5>
        </div>
      </nav>
      <hr color='#18206F' />
      <div className={styles1.contenido}>
          <div className={styles1.columnahead}><h2>Nombre</h2></div>
          <div className={styles1.columnahead}><h2>Tipo</h2></div>
          <div className={styles1.registrosNombres}>
            {datas?.map((alumnos) => (<div key={alumnos.id_alumno} className={styles1.registrosN}>{alumnos.nombre}</div>))}
          </div>
          <div className={styles1.registrosTipos}>
            {datas?.map((alumnos) => (<div key={alumnos.id_alumno} className={styles1.registrosT}>{alumnos.tipo}</div>))}
          </div>
          
          
      </div>

    </div>
  )
}

export default PanelAlumns