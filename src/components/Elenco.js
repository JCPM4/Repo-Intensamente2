// Elenco.js
import React from 'react';
import './Elenco.css'

const Elenco = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Elenco</h2>
      <div style={{ display: 'flex' }}>
        <div>
          <img
            src="Joy.jpg"
            alt="Alegria"
            style={{ marginLeft: '170px',marginTop: '100px',width: '250px', height: '300px', marginBottom: '10px', display: 'block' }}/>
          <p>Amy Poehler <br /> Alegria</p>
        </div>

        <div style={{ marginLeft: '170px' }}>
          <img
            src="Disgust.jpeg"
            alt="Disgusto"
            style={{ marginTop: '100px',width: '250px', height: '300px', marginBottom: '10px' }}/>
          <p>Mindy Kaling <br /> Asco</p>
        </div>

        <div style={{ marginLeft: '170px' }}>
            <img
            src="Sadness.jpg"
            alt="Tristeza"
            style={{ marginTop: '100px',width: '250px', height: '300px', marginBottom: '10px' }}/>
          <p>Phyllis Smith <br /> Tristeza</p>
        </div>  

        <div style={{ marginLeft: '-1090px',marginTop: '550px' }}>
            <img
            src="Raily.png"
            alt="Raily"
            style={{ width: '250px', height: '300px', marginBottom: '10px', display: 'block' }}/>
          <p>Kaitlyn Dias <br /> Raily</p>
        </div>  

        <div style={{ marginLeft: '170px', marginTop: '550px' }}>
            <img
            src="Fear.png"
            alt="Miedo"
            style={{ width: '250px', height: '300px', marginBottom: '10px' }}/>
          <p>Bill Hader <br /> Miedo</p>
        </div> 

        <div style={{ marginLeft: '170px', marginTop: '550px' }}>
            <img
            src="Anger.jpg"
            alt="Furia"
            style={{ width: '250px', height: '300px', marginBottom: '10px' }}/>
          <p>Lewis Black <br /> Furia</p>
        </div>   

      </div>
    </div>
  );
};

export default Elenco;