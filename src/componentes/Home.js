import { AiOutlineUser } from "react-icons/ai";
import styles from '../estilos/Home.module.css';
import { fondo } from "../App";
import { useState } from "react"
import preguntas from "./preguntas"
import { useForm } from "./useForm";
import Swal from "sweetalert2";

const personajes = require.context('../../public/personajes', true)

const initialForm = {
  id_docente: 1111,
  nombre: "",
  tipo: ""
}

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!form.nombre.trim()) {
    errors.nombre = " El nombre es necesario";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = " El nombre sólo acepta letras y espacios en blanco";
  }

  return errors;
}

function Home() {

  /* Declaracion de useState utilizados */
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [stared, setStared] = useState(0);
  const [puntuacionA, setPuntuacionA] = useState(0);
  const [puntuacionV, setPuntuacionV] = useState(0);
  const [puntuacionK, setPuntuacionK] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const { form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit3 } = useForm(initialForm, validationsForm);



  function handleAnswerSubmit(getTipo, e) {
    if (getTipo == 'A') setPuntuacionA(puntuacionA + 1); //En caso de que la respuesta sea tipo Auditivo, se sumara al puntuaje Auditivo
    if (getTipo == 'V') setPuntuacionV(puntuacionV + 1); //En caso de que la respuesta sea tipo Visual, se sumara al puntuaje Visual
    if (getTipo == 'K') setPuntuacionK(puntuacionK + 1); //En caso de que la respuesta sea tipo Kinestesico, se sumara al puntuaje Kinestesico

    if (preguntaActual === preguntas.length - 1) { //Si la pregunta actual es igual que la longitud de preguntas menos uno, entonces devuelve que el cuestionario finalizó
      setIsFinished(true);
    } else {
      setPreguntaActual(preguntaActual + 1); //Si no, se suma en uno el numero de preguntas que lleva
    }
  }

  if (puntuacionA > puntuacionV) {
    form.tipo = "Auditivo"

  } else if (puntuacionV > puntuacionK) {
    form.tipo = "Visual"

  } else if (puntuacionK > puntuacionA) {
    form.tipo = "Kinestesico"

  }

  if (isFinished) {/* Si esta finalizado el cuestionario, regresa la siguiente pantalla con los puntajes */


  
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Auditivo {puntuacionA} de {preguntas.length}{" "}<br />
            Visual {puntuacionV} de {preguntas.length}{" "}<br />
            Kinestesico {puntuacionK} de {preguntas.length}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            Volver a jugar
          </button>
          <button onClick={() =>{
             handleSubmit3()
             Swal.fire({icon:"success", title:"Registro guardado", text:form.nombre +" tus datos ya estan guardados"}).then((result) => {
              if (result.isConfirmed) {
                  window.location.href = "/"
              }})
            }}>
            Enviar datos
          </button>
        </div>
      </main>
    );
  }
  if (stared == 1) /* Lo siguiente se muestra despues de que el usuario haya dado click en la pantalla inicial, y es donde se ingresa el codigo de profesor */
    return (
      <div>
        <div className={styles.login} onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black" /></a></div>
        <div>
          
          <div className={styles.btnInicio} >
            <div className={styles.Inicio}>
              <input type="number" name="id_docente" className={styles.inputs} value={form.id_docente} onChange={handleChange} />
              <h1>Ingresa el codigo de tu maestro</h1>
            </div>
          </div>
          <img src={personajes(`./PUKY2.png`)} className={styles.puky2} onClick={() => setStared(2)}></img>
          <img src={personajes(`./DIKY2.png`)} className={styles.diky2} onClick={() => setStared(0)} alt="Pantalla anterior" title="Pagina anterior"/>
        </div>
      </div>
    );

  if (stared == 2)/* En esta parte el usuario ingresa su nombre  */
    return (
      <div>
        <div className={styles.login} onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black" /></a></div>
        <div>
          <div className={styles.btnInicio}>
            <div className={styles.Inicio}>
              <input type="text" name="nombre" value={form.nombre} className={styles.inputs} onChange={handleChange} />
              <h1>Ingresa tu nombre y empieza con el test</h1>
            </div>
          </div>
          <img src={personajes(`./PUKY2.png`)} className={styles.puky2} onClick={() => setStared(3)}></img>
          <img src={personajes(`./DIKY2.png`)} className={styles.diky2} onClick={() => setStared(1)} alt="Pantalla anterior" title="Pagina anterior"/>
        </div>
      </div>
    );

  if (stared == 3)/* En esta parte es donde se muestra pregunta por pregunta avanzando automaticamente despues de seleccionar la respuesta */
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
        </div>
        <div className="lado-derecho">
          {preguntas[preguntaActual].opciones.map((respuesta) => (
            <button
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.getTipo, e)}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
      </main>
    );




  return ( /* Inicialmente esta clase retorna este div, que es donde se muestra la pregunta ¿Quieres saber que personaje eres??? */
    <div>
      <div className={styles.login} onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black" /></a></div>
      <div>
        <img src={personajes(`./COCKY.png`)} className={styles.cocky}></img>
        <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
        <div className={styles.btnInicioP} onClick={() => setStared(1)}>
          <div className={styles.Inicio}>
            <h1>¿QUIERES SABER QUE PERSONAJE ERES?</h1>
          </div>
        </div>
        <img src={personajes(`./KUKY.png`)} className={styles.kuky}></img>
        <img src={personajes(`./DIKY.png`)} className={styles.diky}></img>
        <img src={personajes(`./MIKY.png`)} className={styles.miky}></img>
        <img src={personajes(`./DUKY.png`)} className={styles.duky}></img>
      </div>
    </div>
  );
}

export default Home;
