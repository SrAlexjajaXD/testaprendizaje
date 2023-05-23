import React, { useState } from 'react'
import '../estilos/graficas.css';
import { CiAlignLeft } from "react-icons/ci";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import styles1 from '../estilos/estilosPaneles.module.css'
import { useFetch } from './useFetch';
const personajes = require.context('../../public/personajes', true)

const PanelGraficas = () => {

  const { data, loadingApi, error } = useFetch("https://nodejs-restapi-test-mysql-production.up.railway.app/tipos/alumnos/"+localStorage.getItem('id'))

  //const { data, loadingApi, error } = useFetch("http://localhost:3001/tipos/alumnos/"+localStorage.getItem('id'))


  const COLORS = ['#f26f4b', '#994c82', '#99d5ca', '#FF8042'];

  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiAlignLeft className={styles1.logoXXL} />
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Resultado de tests</h1>
          <h3>Test de tipo de aprendizaje</h3>
        </div>
      </nav>
      <hr color='#18206F' />


      <ResponsiveContainer height={500}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={140}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie 
            data={data} 
            dataKey="value" 
            cx="50%" 
            cy="50%" 
            innerRadius={160} 
            outerRadius={200} 
            fill="#82ca9d" 
            label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className={styles1.contenido2}>
        <img src={personajes(`./DUKY.png`)} title='Soy DUKY y mi tipo de aprendizaje es auditivo'></img>
        <img src={personajes(`./KUKY.png`)} title='Soy KUKY y mi tipo de aprendizaje es visual'></img>
        <img src={personajes(`./MIKY.png`)} title='Soy MIKY y mi tipo de aprendizaje es kinéstesico'></img>
      </div>




    </div>
  )
};


export default PanelGraficas

