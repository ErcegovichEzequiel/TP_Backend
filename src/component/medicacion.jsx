import React from 'react'
import '../styles/cotizaciones.css';
import { Link } from 'react-router-dom';

export const Medicacion = () => {
  return (
    <section className='cotizaciones'>
      <h3>Medicacion Solicitada</h3>
      <form className='form'>
        <input className='input' type="text" placeholder="Monodroga" required />
        <input className='input' type="text" placeholder='Presentacion' required />
        <input className='input' type="number" placeholder='Cantidad' required />
        <input className='input' type="text" placeholder='Marca (Opcional)' />
        <textarea placeholder='Observaciones (maximo 500 caracteres)' maxlength="500"></textarea>
      </form>
      <Link className='boton' to='/cotizaciones'>VOLVER</Link>
    </section>
  )
}
