import React from 'react'
import { CiUser } from "react-icons/ci";
import "../estilos/Login.css"
import { CiCircleChevLeft } from "react-icons/ci";
import { fondo } from '../App';


function Inicio() {

  return (
    <div>
      <div className="login"><a href='/'><CiCircleChevLeft color='#FEDC97'/></a></div>
      <div className='Login'>
        <div className='logoInicio'>
            <CiUser color='#FEDC97'/>
        </div>
        <form action="/dashboard" method=''>
            <input placeholder="Usuario" name="usuario" id="usuario"></input><br/>
            <input placeholder="Contraseña" name="contraseña" id="contraseña"></input><br/>
            <button type="submit">Iniciar sesión</button><br/>
            <a id='register' href='/register'>Registrarse</a>
        </form>
      </div>
    </div>
      
  )
}

export default Inicio