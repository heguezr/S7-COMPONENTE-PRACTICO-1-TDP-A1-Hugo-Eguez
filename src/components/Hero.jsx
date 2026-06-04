import React from 'react';
import './Hero.css';

function Hero() {
  const mostrarMensaje = () => {
    alert("¡Hola! Pues un evento es una acción, suceso o señal detectada por el sistema (como un clic del ratón, igual al que acabas de dar hace un momento) que indica que algo ha ocurrido.");
  };

  return (
    <section className="hero">
      <img src="https://imgs.search.brave.com/1Vq0GMFNizE5DNDRLtQUVB_fYi9iXKiF0I8yrv6ArP8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzIw/Mzk4MTI0L3N0b2Nr/LXBob3RvLXRvcC12/aWV3LWxhcHRvcC1j/b21wdXRlci1tb3Vz/ZS1wbGFudC13ZWJz/aXRlLWRlc2lnbi10/ZW1wbGF0ZS1hYnN0/cmFjdA"/>
      <h1>¡Bienvenidos a mi Landing Page!</h1>
      <p>Esta es una aplicación práctica para aprender cómo funciona React y JavaScript.</p>
      <p>Este es un botón, activa un "evento", pero... ¿Qué signica eso?</p>
      
      <button onClick={mostrarMensaje} className="hero-boton">
        Hacer clic aquí
      </button>
    </section>
  );
}

export default Hero;