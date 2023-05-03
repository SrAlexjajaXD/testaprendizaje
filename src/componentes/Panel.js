import React from 'react'
import PanelGraficas from './PanelGraficas';
import PanelPerfil from './PanelPerfil';
import PanelAlumns from './PanelAlumns'
import PanelTest from './PanelTest'


/* Funcion que le da funcionamiento a cada uno de los botones en el panel de navegacion izquierdo */
function Navegacion(props) {    

  const {pnel}=props

  switch (pnel){
    case 1: return <PanelPerfil/> //En caso de seleccionar el boton 1 arroja el panel de docente
    case 2: return <PanelGraficas/> //en caso de seleccionar el boron 2 arroja el panel de resultados 
    case 3: return <PanelAlumns/> //en caso de seleccionar el boton 3 arroja el panel de listado de alumnos 
    case 4: return <PanelTest/> // en caso de seleccionar el boton 4 arroja el panel de tests
  }
}

export default Navegacion