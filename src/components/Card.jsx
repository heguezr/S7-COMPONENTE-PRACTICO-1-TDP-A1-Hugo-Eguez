import React from 'react';
import './Card.css';

function Card() {
  const agrandarTexto = (event) => {
    event.target.style.color = 'red';
    event.target.style.fontWeight = 'bold';
    event.target.style.transform = 'scale(1.2)';
  };

  const restaurarTexto = (event) => {
    event.target.style.color = '#000000';
    event.target.style.fontWeight = 'normal';
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div className="card">
      <h3>¿Sabes cómo funciona onMouseOver y onMouseOut?</h3>
      
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        A veces, los eventos funcionan cuando pasas el 
        <span 
          onMouseOver={agrandarTexto} 
          onMouseOut={restaurarTexto} 
          className="palabra-interactiva"
        >
          "mouse"
        </span> 
        <br />  
        encima de alguna palabra, si quitas el puntero de allí, 
        <br />
        el texto regresa a la normalidad, aunque también funciona
        <span 
          onMouseOver={agrandarTexto} 
          onMouseOut={restaurarTexto} 
          className="palabra-interactiva"
        >
          en una una oración completa.
        </span> 
      </p>
    </div>
  );
}

export default Card;