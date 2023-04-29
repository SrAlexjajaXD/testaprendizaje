import { AiOutlineUser } from "react-icons/ai";
import styles from '../estilos/Home.module.css';
import { fondo } from "../App";
import { useState } from "react";

const personajes = require.context('../../public/personajes', true)



function Navegacion() {    

  const [pantalla, setPantalla]=useState(0);

    const Comenzar=()=>{
        return(
          <div>
              <div className={styles.login}  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
              <div>
                <img src={personajes(`./COCKY.png`)} className={styles.cocky}></img>
                <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
                <div className={styles.btnInicio} onClick={setPantalla(1)}>
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
  
  
  const Registro=()=>{
    return(
      <div>
          <div className={styles.login}  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
          <div>
            <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
            <div className={styles.btnInicio} onClick={setPantalla(2)}>
                <div className={styles.Inicio}>
                    <h1>¿QUIERES SABER QUE PERSONAJE ERES?</h1>
                </div>
            </div>
            <img src={personajes(`./DIKY.png`)} className={styles.diky}></img>
          </div>
        </div>
    );
  }

}


function Home(props) {
  return(
    <div>
        <div className={styles.login}  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
        <div>
          <img src={personajes(`./COCKY.png`)} className={styles.cocky}></img>
          <img src={personajes(`./PUKY.png`)} className={styles.puky}></img>
          <div className={styles.btnInicio}>
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
