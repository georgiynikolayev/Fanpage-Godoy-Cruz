import React from 'react'
import TablaData from '../components/TablaData'
import './home.css'

function header() {
    return(
        <>
            <article>
                <section id="articleCarousel">
                    <ul>
                        <li><a href="#"></a><img src="./images/indexSlider/01.png"></img></li>
                        <li><a href="#"></a><img src="./images/indexSlider/02.png"></img></li>
                    </ul>
                </section>
                <section id='homeContent'>
                    <div id='summaryInfoClub'>
                        <h3>Recopilación de la historia, palmarés, jugadores y las campañas del bodeguero en la máxima categoría del fútbol argentino, su disputa en la Primera B Nacional y más información, actual e histórica del club.</h3>
                        <p className="summaryInfoClubText">Fundado el <b>1 de Junio de 1921</b> como Club Sportivo Godoy Cruz y luego renombrado el 26 de septiembre de 1933 tras fusionarse con el Club Bodega Antonio Tomba, Es el club más grande de Mendoza, teniendo <b>dieciséis temporadas en la Primera División argentina</b>. También es el único equipo de la región cuyana en participar en competiciones internacionales, disputando cuatro veces la Copa Libertadores de América y dos veces la Sudamericana.</p>
                    </div>
                    <aside id="articleAside">
                        <div id="ArticleAsideTable">
                            <TablaData />
                        </div>
                    </aside>
                </section>
            </article>
        </>
    )
}

export default header