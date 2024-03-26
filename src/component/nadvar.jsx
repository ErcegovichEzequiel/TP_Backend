import '../styles/nadvar.css';
import React from 'react';
import { Link } from 'react-router-dom';
export const Nadvar = () => {
    return (
        <>
            <div className='nadvarPrincipal'>
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="./cotizaciones">Cotizaciones</Link>
                <Link className='link' to="./pedidos">Pedidos</Link>

            </div>
        </>
    )
}
