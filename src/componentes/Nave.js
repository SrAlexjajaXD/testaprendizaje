import React from 'react'
import Registrar from './Registrar'
import Inicio from './Inicio'


// const router = createBrowserRouter([
//     {path:'/inicio', element:<Inicio/>},
//     {path:'/register', element:<Registrar/>}
//   ])

var cambio
function cambiar(valor){
    cambio=valor

}


function Nave() {
  return (
    <div>
        {cambio ? <Registrar/> : <Inicio/>}
    </div>
  )
}

export {cambiar}
export default Nave