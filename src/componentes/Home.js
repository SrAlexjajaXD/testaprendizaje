import { AiOutlineUser } from "react-icons/ai";
import styles from '../estilos/Home.module.css';
import { fondo } from "../App";
import { useState } from "react"
import preguntas from "./preguntas"

const personajes = require.context('../../public/personajes', true)



function Home() {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [stared, setStared] = useState(0);
  const [puntuacionA, setPuntuacionA] = useState(0);
  const [puntuacionV, setPuntuacionV] = useState(0);
  const [puntuacionK, setPuntuacionK] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(getTipo, e) {
    if (getTipo == 'A') setPuntuacionA(puntuacionA + 1);
    if (getTipo == 'V') setPuntuacionV(puntuacionV + 1);
    if (getTipo == 'K') setPuntuacionK(puntuacionK + 1);

    if (preguntaActual === preguntas.length - 1) {
      setIsFinished(true);
    } else {
      setPreguntaActual(preguntaActual + 1);
    }
  }



  if (isFinished)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntuacionA} de {preguntas.length}{" "}<br />
            Obtuviste {puntuacionV} de {preguntas.length}{" "}<br />
            Obtuviste {puntuacionK} de {preguntas.length}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            Volver a jugar
          </button>
        </div>
      </main>
    );



  if (stared==3)
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




  if (stared==2)
  return(
    <div>
        <div className={styles.login}  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
        <div>
          <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
          <div className={styles.btnInicio} onClick={()=>setStared(3)}>
              <div className={styles.Inicio}>
                  <h1>Ingresa tu nombre y empieza con el test</h1>
              </div>
          </div>
          <img src={personajes(`./DIKY.png`)} className={styles.diky}></img>
        </div>
      </div>
  );



  if (stared==1)
  return(
    <div>
        <div className={styles.login}  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
        <div>
          <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
          <div className={styles.btnInicio} onClick={()=>setStared(2)}>
              <div className={styles.Inicio}>
                  <h1>Ingresa el codigo de tu maestro</h1>
              </div>
          </div>
          <img src={personajes(`./DIKY.png`)} className={styles.diky}></img>
        </div>
      </div>
  );

  return(
    <div>
        <div className={styles.login}  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
        <div>
          <img src={personajes(`./COCKY.png`)} className={styles.cocky}></img>
          <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
          <div className={styles.btnInicio} onClick={()=>setStared(1)}>
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
