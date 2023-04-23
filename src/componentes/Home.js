import { AiOutlineUser } from "react-icons/ai";
import '../estilos/Home.css';
import { fondo } from "../App";

const personajes = require.context('../../public/personajes', true)

function Home() {
  return (
      <div>
        <div className="login"  onClick={fondo(false)}><a href='/inicio'><AiOutlineUser color="black"/></a></div>
        <div>
          <img src={personajes(`./COCKY.png`)} id="cocky"></img>
          <img src={personajes(`./PUKY.png`)} id="puky"></img>
          <div className="btnInicio">
              <div className="Inicio">
                  <h1>¿QUIERES SABER QUE PERSONAJE ERES?</h1>
              </div>
          </div>
          <img src={personajes(`./KUKY.png`)} id="kuky"></img>
          <img src={personajes(`./DIKY.png`)} id="diky"></img>
          <img src={personajes(`./MIKY.png`)} id="miky"></img>
          <img src={personajes(`./DUKY.png`)} id="duky"></img>
        </div>
      </div>
      
    
  );
}

export default Home;
