import React from 'react'
import { CiFileOn } from "react-icons/ci";
import styles from '../estilos/Perfil.module.css';
import styles1 from '../estilos/estilosPaneles.module.css'

function PanelTest() {
  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiFileOn className={styles1.logoXXL}/>
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Alumnos</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>Antonia Alberston</h5>
        </div>
      </nav>
      <hr color='#18206F'/>
      <div className={styles.contenedorCampos}>
         <button><CiFileOn />Tipos de aprendizaje</button>
      </div>
    </div>
  )
}

export default PanelTest