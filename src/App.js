import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Elenco from './components/Elenco';
import Critica from './components/Critica';
import Formulario from './components/Formulario';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/elenco" element={<Elenco />} />
          <Route path="/critica" element={<Critica />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
