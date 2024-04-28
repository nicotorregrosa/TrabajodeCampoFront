import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/permanentes/Navbar';
import Inicio from './Componentes/paginas/inicio/Inicio';
import Aulas from './Componentes/paginas/aulas/Aulas';
import Carreras from './Componentes/paginas/carreras/Carreras';
import Elementos from './Componentes/paginas/elementos/Elementos';
import Espacios from './Componentes/paginas/espacios/Espacios';
import Materias from './Componentes/paginas/materias/Materias';
import Personal from './Componentes/paginas/personal/Personal';
import PlanDeEstudio from './Componentes/paginas/plan de estudio/PlanDeEstudio';
import TipoDeEspacio from './Componentes/paginas/tipo de espacio/TipoDeEspacio';

const App = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/' element={<Aulas></Aulas>} ></Route>
                    <Route exact path='/' element={<Carreras></Carreras>} ></Route>
                    <Route exact path='/' element={<Elementos></Elementos>} ></Route>
                    <Route exact path='/' element={<Espacios></Espacios>} ></Route>
                    <Route exact path='/' element={<Materias></Materias>} ></Route>
                    <Route exact path='/' element={<Personal></Personal>} ></Route>
                    <Route exact path='/' element={<PlanDeEstudio></PlanDeEstudio>} ></Route>
                    <Route exact path='/' element={<TipoDeEspacio></TipoDeEspacio>} ></Route>
                </Routes>
            </main>
        </Router>
    );
};

export default App;