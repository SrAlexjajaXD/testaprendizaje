import React from 'react'
import { CiFileOn } from "react-icons/ci";
import { HiDocumentText, HiDocumentAdd } from "react-icons/hi";
import styles from '../estilos/Perfil.module.css';
import styles1 from '../estilos/estilosPaneles.module.css'
import Swal from 'sweetalert2';
import { useFetch } from './useFetch';

function PanelTest() {

  const { data, loadingApi, error } = useFetch("https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/"+localStorage.getItem('id'))
  // const { data, loadingApi, error } = useFetch("http://localhost:3001/docentes/"+localStorage.getItem('id'))

  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiFileOn className={styles1.logoXXL}/>
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Tests</h1>
          <h5>{data.nombre}</h5>
        </div>
      </nav>
      <hr color='#18206F'/>
      <div className={styles.contenedorCampos2}>
         <a className={styles1.cardTest} href="./TEST.pdf" download title="Descargar archivo">
          <div className={styles1.iconoTest}>
            <HiDocumentText/>
          </div>
          <div className={styles1.tituloTest}>
            <hr/>
            Tipo de aprendizaje
          </div>
         </a>
         <a className={styles1.cardTest} onClick={()=>{
          Swal.fire({
            title: 'Seleccionar archivo PDF del test',
            input: 'file',
            inputAttributes: {
              'accept': 'pdf/*'
            }
          })
         }}>
          <div className={styles1.iconoTest}>
            <HiDocumentAdd/>
          </div>
          <div className={styles1.tituloTest}>
            <hr/>
            Solicitar nuevo test
          </div>
         </a>
      </div>
    </div>
  )
}

export default PanelTest