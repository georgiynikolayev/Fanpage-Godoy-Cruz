import React, { useState, useEffect } from 'react';
import CuerpoTecnicoDatos from './CuerpoTecnicoDatos';
import './PlantelDatos.css'

function PlantelDatos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/jugadores/');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div className='tablaPlantelDiv'>
      <table className='tablaPlantel'>
          <thead>
            <tr>
              <th>Num</th>
              <th>Nombre</th>
              <th>Pos</th>
              <th>Nac</th>
              <th>Edad</th>
            </tr>
          </thead>
        
          {data ? (
            <tbody>
              {data[0]?.map((jug)=>(
                  <tr key={jug.Num}>
                    <td>{jug.Num}</td>
                    <td>{jug.Nombre}</td>
                    <td className={jug.Pos}>{jug.Pos}</td>
                    <td>{jug.Nac}</td>
                    <td>{jug.Edad} Años</td>
                  </tr>
              ))}
              
            </tbody>
            ) :
            (
              <tbody>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
                <tr>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                  <td>Cargando datos...</td>
                </tr>
              </tbody>
            )
          }
      </table>
      <div>
        <CuerpoTecnicoDatos />
      </div>
    </div>
  )
}

export default PlantelDatos
