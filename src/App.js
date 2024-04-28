import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/permanentes/Navbar';
import Inicio from './Componentes/paginas/inicio/Inicio';
import Aulas from './Componentes/paginas/aulas/Aulas';

const App = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Aulas></Aulas>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                </Routes>
            </main>
        </Router>
    );
};

export default App;