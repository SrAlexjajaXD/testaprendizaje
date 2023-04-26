import React from 'react'
import PanelGraficas from './PanelGraficas';
import PanelPerfil from './PanelPerfil';
import PanelAlumns from './PanelAlumns'
import PanelTest from './PanelTest'

function Navegacion(props) {    

  const {pnel}=props

  switch (pnel){
    case 1: return <PanelPerfil/>
    case 2: return <PanelGraficas/>
    case 3: return <PanelAlumns/>
    case 4: return <PanelTest/>
  }
}

export default Navegacion