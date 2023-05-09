import React, { useEffect, useState } from 'react'
import { CiFaceSmile } from "react-icons/ci";
import styles1 from '../estilos/estilosPaneles.module.css'
import axios from 'axios';

function PanelAlumns() {

  const [data, setData] = useState(null)

  const consulta = () =>{
    axios.get("http://localhost:3001/alumnos").then(response=>{
      setData(response.data)
    })
  }

  consulta()

  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiFaceSmile className={styles1.logoXXL} />
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Alumnos</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>Antonia Alberston</h5>
        </div>
      </nav>
      <hr color='#18206F' />
      <div className={styles1.contenido}>
          <div className={styles1.columnahead}><h2>Nombre</h2></div>
          <div className={styles1.columnahead}><h2>Tipo</h2></div>
          <div className={styles1.registrosNombres}>
            {data?.map((alumnos) => (<div key={alumnos.id_alumno} className={styles1.registrosN}>{alumnos.nombre}</div>))}
          </div>
          <div className={styles1.registrosTipos}>
            {data?.map((alumnos) => (<div key={alumnos.id_alumno} className={styles1.registrosT}>{alumnos.tipo}</div>))}
          </div>
          
          
      </div>

    </div>
  )
}

export default PanelAlumns