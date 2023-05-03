import React from 'react'
import { CiFaceSmile } from "react-icons/ci";
import styles1 from '../estilos/estilosPaneles.module.css'

function PanelAlumns() {
  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiFaceSmile className={styles1.logoXXL}/>
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Alumnos</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>Antonia Alberston</h5>
        </div>
      </nav>

      <hr color='#18206F'/>
      <div className={styles1.contenido}>
      </div>
      
    </div>
  )
}

export default PanelAlumns