import '../styles/cotizaciones.css';
import { Link } from 'react-router-dom';

export const Cotizaciones = () => {
  return (
    <>
      <section className='cotizaciones'>
        <h3>Datos del Afiliado</h3>
        <form className='form'>
          <input className='input' type="text" placeholder="Numero de Afiliado" required />
          <input className='input' type="text" placeholder='Apellido y Nombre' required />
          <p>¿Retira en Farmacia?</p>
          <label className='label'>
            <input className='inputRadio' type="radio" name='retira' />Si
            <input className='inputRadio' type="radio" name='retira' /> No
          </label>
          <input className='input' type="text" placeholder='Direcion' required />
          <textarea placeholder='Observaciones (maximo 500 caracteres)' maxLength="500"></textarea>
        </form>
        <Link className='boton' to='/medicacion'>ENVIAR</Link>
      </section >
    </>
  )
}
