import React, { useState } from 'react'
import { CiAlignLeft, CiUser, CiFaceSmile, CiFileOn } from "react-icons/ci";
import "./estilos/dashboard.css"
import Panel from './componentes/Panel';


function Dashboard() {

  var b1 = document.getElementById("body");
  b1.style.background = '#02314D';

  const [pnel, setPanel]= useState(1)

  return (
    <div className='panel'>
      <aside className="navegacion">
        <div id="centrar">
          <div className='btnNav' id="Usuario" onClick={() => { setPanel(1) }}>
            <div><CiUser fontSize={"xxx-large"} /></div>
            <h3>Usuario</h3>
          </div>
          <div className='btnNav' id="Resultados" onClick={() => { setPanel(2) }}>
            <div><CiAlignLeft fontSize={"xxx-large"} /></div>
            <h3>Resultados</h3>
          </div>
          <div className='btnNav' id="Alumnos" onClick={() => { setPanel(3) }}>
            <div><CiFaceSmile fontSize={"xxx-large"} /></div>
            <h3>Alumnos</h3>
          </div>
          <div className='btnNav' id="Tests" onClick={() => { setPanel(4) }}>
            <div><CiFileOn fontSize={"xxx-large"} /></div>
            <h3>Tests</h3>
          </div>
        </div>
      </aside>
      <Panel pnel={pnel}/>
    </div>
  )
}


export default Dashboard