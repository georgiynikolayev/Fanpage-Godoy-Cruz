import React, { useState, useEffect } from 'react';
import './PlantelDatos.css'

function CuerpoTecnicoDatos() {
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
    <div className="listCuerpoTecnico">
      <list>
        <div id="tittleListCuerpoTecnico">
                              <img src="../../../images/icon.png"></img>
                              <h2>Cuerpo Técnico</h2>
                          </div>
        {data && data[1]?.map((ct, index) => (
          <ul key={index} className='itemsListCuerpoTecnico'>
            <li>
              <b>{ct.Nombre}</b> <br></br> <i>{ct.Cargo}</i>
            </li>
          </ul>
        ))}
      </list>
    </div>
  )
}

export default CuerpoTecnicoDatos;
