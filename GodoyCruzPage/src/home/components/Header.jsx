import React from 'react'
import './header.css'
import { Outlet, Link } from "react-router-dom";

function header() {
    return(
        <header>
            <div id="headerDiv">
                <img className="headerDivImg" src="./images/CDGCAT.png"></img>
                <p className='esloganHeader'>El único grande del oeste argentino.</p>
            </div>
            <nav id="headerNav">
                <Link to="/" className="headerNavA">Home</Link>
                <Link to="/jugadores" className="headerNavA">Jugadores</Link>
                <Link to="/temporadas" className="headerNavA">Temporadas</Link>
            </nav>
            <div>
                <nav>
                </nav>
                <hr />
                <Outlet />
            </div>
        </header>
    )
}

export default header