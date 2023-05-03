import React from 'react'
import '../estilos/graficas.css';
import { CiAlignLeft } from "react-icons/ci";
import { PieChart, Pie, Tooltip } from 'recharts';
import styles1 from '../estilos/estilosPaneles.module.css'

const PanelGraficas = () => { 
  const data = [
    { name: "Contestados", value: 8 },
    { name: "Alumnos", value: 10 },
    { name: "Visuales", value: 4 },
    { name: "Auditivos", value: 2 },
    { name: "Cinestesicos", value: 2 },
    { name: "Sin evaluar", value: 2 },
  ];
  const data2 = [
    { name: "Contestados", value: 8 },
    { name: "Alumnos", value: 10 },
    { name: "Visuales", value: 4 },
    { name: "Auditivos", value: 2 },
    { name: "Cinestesicos", value: 2 },
    { name: "Sin evaluar", value: 2 },
  ];
  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiAlignLeft className={styles1.logoXXL} />
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Alumnos</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>Antonia Alberston</h5>
        </div>
      </nav>
      <hr color='#18206F' />
      <div className={styles1.grafica}>
        <PieChart width={500} height={500}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={140} fill="#454ea8" />
          <Pie data={data2} dataKey="value" cx="50%" cy="50%" innerRadius={160} outerRadius={200} fill="#262f8c" label />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  )
};


export default PanelGraficas

