import React from 'react'
import Navegacion from './componentes/Navegacion'
import PanelDash from './componentes/PanelDash'
import "./estilos/dashboard.css"

function Dashboard() {

  var b1 = document.getElementById("body");
  b1.style.background = '#02314D';
  

  return (
    <div className='panel'>
      <Navegacion/>
      <PanelDash/>
    </div>
  )
}

export default Dashboard