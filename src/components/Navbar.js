// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" id="inicio">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav-item" id="elenco">
          <Link to="/elenco">Elenco</Link>
        </li>
        <li className="nav-item" id="critica">
          <Link to="/critica">Crítica</Link>
        </li>
        <li className="nav-item" id="formulario">
          <Link to="/formulario">Formulario</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

  

