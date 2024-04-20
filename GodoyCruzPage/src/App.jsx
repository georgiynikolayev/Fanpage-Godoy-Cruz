import React, { useState } from 'react';
import './App.css';
import Header from './home/components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Jugadores from './plantel/route/PlantelDatos.jsx';
import Home from './home/route/Home.jsx';
import Temporadas from './temporada/route/Temporada.jsx';
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
        <div>
        <Routes>
            <Route path="/" element={<Header />}>
            <Route path="jugadores" element={<Jugadores />} />
            <Route path="temporadas" element={<Temporadas />} />
            <Route path="/" element={<Home />} />
            </Route>
        </Routes>
        </div>
        <Footer />
    </>
  )
}

export default App