import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarVertical from './Componentes/permanentes/NavbarVertical';
import Inicio from './Componentes/paginas/inicio/Inicio';
import Aulas from './Componentes/paginas/aulas/Aulas';
import TipoDeEspacio from './Componentes/paginas/tipo de espacio/TipoDeEspacio';
import Carreras from './Componentes/paginas/carreras/Carreras';
import Elementos from './Componentes/paginas/elementos/Elementos';
import Espacios from './Componentes/paginas/espacios/Espacios';
import Materias from './Componentes/paginas/materias/Materias';
import Personal from './Componentes/paginas/personal/Personal';
import PlanDeEstudio from './Componentes/paginas/plan de estudio/PlanDeEstudio';
import Footer from './Componentes/permanentes/Footer';



const App = () => {
    return (
        <Router>
            <NavbarVertical></NavbarVertical>
            <main>
                <Routes>
                    <Route exact path='/' element={<Inicio></Inicio>} ></Route>
                    <Route exact path='/Aulas' element={<Aulas></Aulas>} ></Route>
                    <Route exact path='/Carreras' element={<Carreras></Carreras>} ></Route>
                    <Route exact path='/Elementos' element={<Elementos></Elementos>} ></Route>
                    <Route exact path='/Espacios' element={<Espacios></Espacios>} ></Route>
                    <Route exact path='/Materias' element={<Materias></Materias>} ></Route>
                    <Route exact path='/Personal' element={<Personal></Personal>} ></Route>
                    <Route exact path='/PlanDeEstudio' element={<PlanDeEstudio></PlanDeEstudio>} ></Route>
                    <Route exact path='/TipoDeEspacio' element={<TipoDeEspacio></TipoDeEspacio>} ></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </Router>
    );
};

export default App;