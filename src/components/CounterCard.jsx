import React, { useState } from 'react';
import './CounterCard.css';

function CounterCard() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div className="counter-card">
      <h3>Contador de Interacciones</h3>
      <p>Demostración de cómo React maneja el estado interno en tiempo real.</p>
      
      <div className="counter-number">
        Clics: {contador}
      </div>

      <div className="counter-actions">
        <button onClick={incrementarContador} className="counter-btn increment">
          ¡Hazme clic!
        </button>
        
        <button onClick={reiniciarContador} className="counter-btn reset">
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default CounterCard;