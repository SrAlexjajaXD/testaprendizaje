import React from 'react'
import { CiUser } from "react-icons/ci";
import styles from '../estilos/Perfil.module.css'
import styles1 from '../estilos/estilosPaneles.module.css'

function PanelPerfil() {

  var nombre = "Antonia"
  var app = "Albertson"
  var apm = "Winstone"
  var id = "1234"
  var escuela = "Escuela Normal Urbana Federal de Cuautla"
  var correo = "antoniaAW@gmail.com"


  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiUser className={styles1.logoXXL}/>
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>{nombre} {app} {apm}</h1>
          <h3>Docente # {id}</h3>
          <h5>{correo}</h5>
        </div>
      </nav>
      <hr color='#18206F'/>
      <form>
        <div className={styles.contenedorCampos}>
              <div className={styles.campo}>
                <input className={styles.inputText} type="text" value={nombre}/>
              </div>

              <div className={styles.campo}>
                <input className={styles.inputText} type="text" value={app}/>
              </div>

              <div className={styles.campo}>
                <input className={styles.inputText} type="text" value={apm}/>
              </div>

              <div className={styles.campo}>
                <input className={styles.inputText} type="email" value={correo}/>
              </div>

              <div className={styles.campo}>
                <input className={styles.inputText} type="password" value={123456}/>
              </div>

              <div className={styles.campo}>
                <input className={styles.inputText} type="text" value={escuela}/>
              </div>
        </div>
            <div className={styles.botones}>
                <div className={styles.botonesL}>
                  <button>Guardar</button>
                  <button>Generar</button>
                </div>
                <div className={styles.botonesR}>
                  <button>Cerrar Sesión</button>
                </div>
              </div>
      </form>
    </div>
  )
}

export default PanelPerfil
