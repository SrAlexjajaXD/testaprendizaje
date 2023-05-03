import React, { useState } from 'react'
import Inicio from './componentes/Inicio'
import Home from './componentes/Home'
import Registrar from './componentes/Registrar'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';


/* Se declaran las rutas de las paginas principales en el proyecyto con ayuda de biblioteca react-router-dom */
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Registrar /> },
  { path: '/inicio', element: <Inicio /> },
  { path: '/dashboard', element: <Dashboard /> }
])


function fondo(camb) {
  var elem = document.getElementById("body");
  if (!camb) {
    elem.style.background = '#A0CED9';
  }
}


function App() { /* Funcion que retorna la renderizacion de acuerdo a la ruta estblecida en la URL */
  return (
    <div className='router' id='router'>
      <RouterProvider router={router} />
    </div>
  )
}

export { fondo }
export default App