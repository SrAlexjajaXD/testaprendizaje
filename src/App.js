import React, { useState } from 'react'
import Inicio from './componentes/Inicio'
import Home from './componentes/Home'
import Registrar from './componentes/Registrar'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProtectedRouter from './componentes/router/ProtectedRouter';


/* Se declaran las rutas de las paginas principales en el proyecyto con ayuda de biblioteca react-router-dom */
// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/register', element: <Registrar /> },
//   { path: '/inicio', element: <Inicio /> },
//   { path: '/dashboard', element: <Dashboard /> }
// ])


function fondo(camb) {
  var elem = document.getElementById("body");
  if (!camb) {
    elem.style.background = '#A0CED9';
  }
}


function App() { /* Funcion que retorna la renderizacion de acuerdo a la ruta estblecida en la URL */
  return (
    <BrowserRouter>
    <Routes>
    {/** NO PROTEGIDAS */}
    <Route path="/" element={< Home/>} />
    <Route path="/inicio" element={<Inicio/>}/>
    <Route path="*" element={<Navigate to="/" /> } />
    <Route path="/register" element={<Registrar />} />

    {/** PROTEGIDAS */}
    <Route element={<ProtectedRouter/>}> 
    
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
    
  </Routes>
</BrowserRouter>
  )
}


export { fondo }
export default App