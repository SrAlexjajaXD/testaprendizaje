import React, { useState } from 'react'
import '../estilos/graficas.css';
import { CiAlignLeft } from "react-icons/ci";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import styles1 from '../estilos/estilosPaneles.module.css'
import axios from 'axios';
import { useFetch } from './useFetch';

const PanelGraficas = () => {

  const { data, loadingApi, error } = useFetch("http://localhost:3001/tipos/alumnos/"+localStorage.getItem('id'))


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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


      <ResponsiveContainer width={1400} height={500}>
        <PieChart >
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




    </div>
  )
};


export default PanelGraficas

