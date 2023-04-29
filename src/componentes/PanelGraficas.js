import React from 'react'
import "../estilos/graficas.css"
import styles1 from '../estilos/estilosPaneles.module.css'
import {CiAlignLeft} from "react-icons/ci";

function PanelGraficas() {
  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiAlignLeft className={styles1.logoXXL}/>
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Resultados de Test</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>Antonia Alberston</h5>
        </div>
      </nav>
      <hr color='#FEDC97'/>
        
        <div className='porcentaje'>
          <div className='container'>
            <div className='card'>
              <div className='box'>
|                 <div className='porcent'>
                    <svg>
                      <circle cx="70" cy="70" r="70"/>
                      <circle cx="70" cy="70" r="70"/>
                    </svg>
                    <div className='number'>
                      <p>0<span>%</span></p>
                    </div>
                    <h3 className='text'>Resultados</h3>
                    </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
    
  )
}

export default PanelGraficas