import '../styles/nadvar.css';
import React from 'react';
import { Link } from 'react-router-dom';
export const Nadvar = () => {
    return (
        <>
            <div className='nadvarPrincipal'>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/pedidos"}>Pedidos</Link>
                <Link to={"/cotizaciones"}>Cotizaciones</Link>
            </div>

        </>
    )
}
