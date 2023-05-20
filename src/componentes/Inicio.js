import React from 'react'
import { CiUser } from "react-icons/ci";
import "../estilos/Login.css"
import { CiCircleChevLeft } from "react-icons/ci";
import { useForm } from './useForm';


const initialForm = {
  nombre: "",
  usuario: "",
  correo: "",
  institucion: "",
  contraseña: "",
  contraseña2: ""
}
const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.correo.trim()) {
    errors.correo = " El correo electronico es necesario";
  } else if (!regexEmail.test(form.correo.trim())) {
    errors.correo = " El correo electronico no es valido";
  }

  if (!form.contraseña.trim()) {
    errors.contraseña = " La contraseña es necesaria";
  }

  return errors;
}

function Inicio() { /* Muestra en pantalla la seccion para que el usuario docente pueda iniciar sesión */

}

function Navegacion(){ /* Muestra en pantalla la seccion para que el usuario docente pueda iniciar sesión */

const { form,
  errors,
  loading,
  response,
  handleBlur2,
  handleChange,
  handleSubmit1 } = useForm(initialForm, validationsForm)

  // const handleLogin = () =>{
  //   localStorage.setItem('token', 'true')
  //   localStorage.setItem('correo', form.correo)
  // }

  return (
    <div>
      <div className="login"><a href='/'><CiCircleChevLeft color='#18206F'/></a></div>
      <div className='Login'>
        <div className='logoInicio'>
            <CiUser color='#18206F'/>
        </div>
        <form onSubmit={handleSubmit1}>
            <input placeholder="Correo electronico" name="correo" onBlur={handleBlur2} onChange={handleChange} value={form.correo}></input><br/>
            <input placeholder="Contraseña" name="contraseña" type='password' onBlur={handleBlur2} onChange={handleChange} value={form.contraseña}></input><br/>
            
            <button type="submit">
              
            Iniciar sesión
            </button><br/>
            
            
            <a id='register' href='/register' color='#18206F'>Registrarse</a>
        </form>
      </div>
    </div>
      
  )
}

export default Navegacion
export {Inicio}