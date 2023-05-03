import React from 'react'
import { CiUser } from "react-icons/ci";
import "../estilos/Login.css"
import { CiCircleChevLeft } from "react-icons/ci";


function Inicio() { /* Muestra en pantalla la seccion para que el usuario docente pueda iniciar sesión */

  return (
    <div>
      <div className="login"><a href='/'><CiCircleChevLeft color='#18206F'/></a></div>
      <div className='Login'>
        <div className='logoInicio'>
            <CiUser color='#18206F'/>
        </div>
        <form action="/dashboard" method=''>
            <input placeholder="Usuario" name="usuario" id="usuario"></input><br/>
            <input placeholder="Contraseña" name="contraseña" id="contraseña"></input><br/>
            <button type="submit">Iniciar sesión</button><br/>
            <a id='register' href='/register' color='#18206F'>Registrarse</a>
        </form>
      </div>
    </div>
      
  )
}

export default Inicio