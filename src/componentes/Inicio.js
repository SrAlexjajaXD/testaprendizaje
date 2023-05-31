import React from 'react'
import { CiUser, CiCircleChevLeft, CiCircleQuestion } from "react-icons/ci";
import "../estilos/Login.css"
import { useForm } from './useForm';
import Swal from 'sweetalert2';

const personajes = require.context('../../public/personajes', true)



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

  const tableHtml = `
    <table  style="border-collapse: collapse; width: auto;">
      <thead>
        <tr style="background-color: #f2f2f2; width: auto;">
          <th>Nombre</th>
          <th>Especialidad</th>
          <th>Cargo</th>
          <th>Correo Electrónico</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>Alex Lozano García</td>
          <td>Desarrollo web empresarial</td>
          <td>Backend y Frontend</td>
          <td>alexloga2001@gmail.com</td>
        </tr>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>Diana González Almazán</td>
          <td>Desarrollo web empresarial</td>
          <td>Backend y Frontend</td>
          <td>diana13gonzalez6@gmail.com</td>
        </tr>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>Joseph Emmanuel Ríos Hernández</td>
          <td>Desarrollo web empresarial</td>
          <td>Frontend y Documentación</td>
          <td>josephemmanuelriosher@gmail.com</td>
        </tr>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>Javier Flores Pineda</td>
          <td>Desarrollo web empresarial</td>
          <td>Frontend</td>
          <td>xav.flores4@gmail.com</td>
        </tr>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>Araceli Abrego Román</td>
          <td>Ciencia de datos para la toma de decisiones</td>
          <td>Base de datos</td>
          <td>araceliabregoroman@gmail.com</td>
        </tr>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>Fátima Liyoneth Abrego Roman</td>
          <td>Ciencia de datos para la toma de decisiones</td>
          <td>Base de datos</td>
          <td>layoneth2000gmail.com</td>
        </tr>
        <tr style="border-bottom: 1px solid black; width: auto;">
          <td>José Manuel Gómez Vega</td>
          <td>Ciencia de datos para la toma de decisiones</td>
          <td>Documentación y manuales</td>
          <td>josemanuelgomes@gmail.com</td>
        </tr>
      </tbody>
    </table>
  `;

  return (
    <div>
      <div className="login"><a href='/'><CiCircleChevLeft color='#18206F'/></a></div>
      <div className="help" onClick={()=>{
        Swal.fire({icon:"info", title:"Acerca de los desarrolladores",
      html:tableHtml,
      customClass: {
        content: 'my-swal-content'
      }})
      }}><CiCircleQuestion/></div>
        <img src={personajes(`./LOOGO.png`)} className='logoEscuela'></img>
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