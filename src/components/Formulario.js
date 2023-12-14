// Formulario.js
import React, { useState } from 'react';
import './Formulario.css'; // Importa el archivo de estilos CSS

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    opinion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Agrega lógica adicional aquí, como enviar datos a un servidor
  };

  return (
    <div className="formulario-container">
      <h2>Formulario de Opinión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Opinión:
            <textarea
              name="opinion"
              value={formData.opinion}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
