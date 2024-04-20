import React, { useState, useEffect } from 'react';
import './TablaData.css'

function TablaData() {
    const [data, setData] = useState(null);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/tabla/');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };

    return (
        <>
            <div>
                <table className='tablaPosiciones'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Equipo</th>
                            <th>Pts</th>
                            <th>PJ</th>
                            <th>PG</th>
                            <th>PE</th>
                            <th>PP</th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>DIF</th>
                        </tr>
                    </thead>
                    {data? (
                        <tbody>
                            {data.map((equipo)=>(
                                <tr key={equipo.Pos}>
                                    <td>{equipo.Pos}</td>
                                    <td className='tablaEquipoNombre'>{equipo.Equipo}</td>
                                    <td>{equipo.Pts}</td>
                                    <td>{equipo.PJ}</td>
                                    <td>{equipo.PG}</td>
                                    <td>{equipo.PE}</td>
                                    <td>{equipo.PP}</td>
                                    <td>{equipo.GF}</td>
                                    <td>{equipo.GC}</td>
                                    <td>{equipo.DIF}</td>
                                </tr>
                            ))}
                        </tbody>
                    ):(
                        <tbody>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>...</td>
                            <td className='tablaEquipoNombre'>cargando datos...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                          </tr>
                        </tbody>
                    )}
                </table>
                <p>Los cuatro primeros clasifican a la siguiente ronda</p>
            </div>
        </>
    );
}

export default TablaData;
