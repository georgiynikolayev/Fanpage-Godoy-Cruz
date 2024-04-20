import React, { useState, useEffect } from 'react';
function TemporadaData({temporadaAño}) {
    const [data, setData] = useState(null);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/temporada/${temporadaAño}`);
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };

    return (
        <>
            <h2>{temporadaAño}</h2>
            <div>
                <table className='tablaTemporadas'>
                    <thead>
                        <tr>
                            <th>Local</th>
                            <th colSpan={2}>Resultado</th>
                            <th>Visitante</th>
                            <th>Fecha</th>
                            <th>Estadio</th>
                            <th>Youtube</th>
                            <th>Fecha</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    {data? (
                        <tbody>
                          {data.map((temp, index)=>(
                              <tr key={index}>
                                  <td className={temp.Local}>{temp.Local}</td>
                                  <td>{temp.Lg}</td>
                                  <td>{temp.Vg}</td>
                                  <td className={temp.Visitante}>{temp.Visitante}</td>
                                  <td>{temp.Dia}</td>
                                  <td>{temp.Estadio}</td>
                                  <td><a href={temp.Youtube} target='_blank' className={temp.Youtube}><img src="../images/logos/logo-youtube-blue.png" alt="YouTube" className='linkVideoYoutube'></img></a></td>
                                  <td>{temp.Fecha}</td>
                                  <td>{temp.Resultado}</td>
                              </tr>
                              ))}
                        </tbody>
                    ):(
                        <tbody>
                          <tr>
                            <td colSpan={9}>Cargando datos...</td>
                          </tr>
                          <tr>
                            <td colSpan={9}>Cargando datos...</td>
                          </tr>
                          <tr>
                            <td colSpan={9}>Cargando datos...</td>
                          </tr>
                          <tr>
                            <td colSpan={9}>Cargando datos...</td>
                          </tr>
                          <tr>
                            <td colSpan={9}>Cargando datos...</td>
                          </tr>
                          <tr>
                            <td colSpan={9}>Cargando datos...</td>
                          </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </>
    );
}

export default TemporadaData;
