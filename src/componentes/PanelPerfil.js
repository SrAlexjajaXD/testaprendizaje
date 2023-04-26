import React from 'react'
import { CiAlignLeft, CiUser, CiFaceSmile, CiFileOn } from "react-icons/ci";
import styles from '../estilos/estilosPaneles.module.css'

function PanelPerfil() {

  var nombre = "Antonia"
  var ap = "Albertson"
  var am = "Winston"
  var id = "1233"
  var escuela = "Escuela Normal Urbana Federal de Cuautla"
  var correo = "antoniaalberson@gmail.com"


  return (
    <div className='dashboard'>
      <nav className={styles.encabezadoPanel}>
        <div className={styles.logoXXL}>  
          <CiUser/>
        </div>
        <div className={styles.encabezadoTitulos}>
          <h1 className={styles.h1}>{nombre} {ap} {am}</h1>
          <h3 className={styles.h3}>#{id}</h3>
          <h5 className={styles.h5}>{escuela}</h5>
        </div>
      </nav>
      <hr color='#FEDC97'/>
        <form className={styles.panelPerfil}>
          <input type="text" name="nombre" value={nombre} />
          <input type="text" name="ap" value={ap} />
          <input type="text" name="am" value={am} />
          <input type="email" name="correo" value={correo} />
          <input type="password" name="contrasena" value="asdfasdfasd" />
          <input type="text" name="escuela" value={escuela}/>
          <div className={styles.perfilBtns}>
            <button>Modificar</button>
            <button>Generar</button>
            <button>Cerrar sesión</button>
          </div>
        </form>
    </div>
  )
}

export default PanelPerfil
