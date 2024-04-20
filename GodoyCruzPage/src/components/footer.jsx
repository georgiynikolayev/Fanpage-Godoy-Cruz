import React from "react";
import './footer.css';

function Footer(){
    return(
    <>   
        <footer>
            <section id="footer-copyright">
                <h4>Club Deportivo Godoy Cruz Antonio Tomba. Todos los derechos reservados.</h4>
                <b>Seguí al club en las redes oficiales</b>
            </section>
            <section id="official-social_networks">
                <div>
                    <a className="official-social_networks" href="https://x.com/ClubGodoyCruz?s=20" target="_blank"><img src="../images/logos/logo-twitter.png" alt="Twitter"></img> </a>
                    <a className="official-social_networks" href="https://x.com/ClubGodoyCruz?s=20" target="_blank"><b>Twitter</b></a>
                </div>
                <div>
                    <a className="official-social_networks" href="https://www.facebook.com/ClubGodoyCruzAntonioTomba/?locale=es_LA" target="_blank"><img src="../images/logos/logo-facebook.png" alt="Facebook"></img> </a>
                    <a className="official-social_networks" href="https://www.facebook.com/ClubGodoyCruzAntonioTomba/?locale=es_LA" target="_blank"><b>Facebook</b></a>
                </div>
                <div>
                    <a className="official-social_networks" href="https://www.youtube.com/@godoycruz422" target="_blank"><img src="../images/logos/logo-youtube.png" alt="YouTube"></img> </a>
                    <a className="official-social_networks" href="https://www.youtube.com/@godoycruz422" target="_blank"><b>YouTube</b></a>
                </div>
                <div>
                    <a className="official-social_networks" href="https://www.instagram.com/clubgodoycruzoficial/" target="_blank"><img src="../images/logos/logo-instagram.png" alt="Twitter"></img> </a>
                    <a className="official-social_networks" href="https://www.instagram.com/clubgodoycruzoficial/" target="_blank"><b>Instagram</b></a>
                </div>
            </section>
        </footer>
    </>
    )
}
export default Footer