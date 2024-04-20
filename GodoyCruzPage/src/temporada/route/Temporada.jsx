import React from 'react'
import TemporadaDatos from '../components/TemporadaDatos.jsx'
import './Temporada.css'

function Temporadas() {
    return(
        <>
            <div id='temporadasDiv'>
                <TemporadaDatos temporadaAño='Clausura 2007'/>
            </div>
        </>
    )
}

export default Temporadas