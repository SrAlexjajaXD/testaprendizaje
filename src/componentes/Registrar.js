import React from 'react'
import '../estilos/Login.css'
import { CiUser } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

function Registrar() { /* Muestra en pantalla la seccion para que el usuario se registre */
  return (
    <div>
      <div className="login"><a href='/inicio'><CiCircleChevLeft color='#18206F'/></a></div>
      <div className="Login">
        <div className='logoInicio'><CiUser/></div>
        <form action="">
            <input placeholder="Nombre completo" name="Nombre" id="Nombre"/>
            <input placeholder="Usuario" name="usuario" id="usuario"/><br/>
            <input placeholder="Correo electrónico" name="Correo" id="Correo"/>
            <input placeholder="Institución" name="institucion" id="institucion"/><br/>
            <input placeholder="Contraseña" name="contraseña" id="contraseña"/>
            <input placeholder="Repite contraseña" name="contraseña2" id="contraseña2"/><br/>
            <button type="submit">Registrarse</button><br/>
        </form>
    </div>
    </div>
    
  )
}

export default Registrar