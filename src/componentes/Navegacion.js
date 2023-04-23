import React from 'react'
import { CiAlignLeft, CiUser, CiFaceSmile, CiFileOn } from "react-icons/ci";

function Navegacion() {
  return (
    <aside className="navegacion">
            <div id="centrar">
                <div className='btnNav' id="Usuario" onclick="usuarioClick()">
                    <div><CiUser fontSize={"xxx-large"}/></div>
                    <h3>Usuario</h3>
                </div>
                <div className='btnNav' id="Resultados" onclick="resulClick()">
                    <div><CiAlignLeft fontSize={"xxx-large"}/></div>
                    <h3>Resultados</h3>
                </div>
                <div className='btnNav' id="Alumnos" onclick="alumClick()">
                <div><CiFaceSmile fontSize={"xxx-large"}/></div>
                    <h3>Alumnos</h3>
                </div>
                <div className='btnNav' id="Tests" onclick="testClick()">
                    <div><CiFileOn fontSize={"xxx-large"}/></div>
                    <h3>Tests</h3>
                </div>
            </div>
    </aside>
  )
}

export default Navegacion