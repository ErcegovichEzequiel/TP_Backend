import { Route, Routes } from 'react-router-dom';
import { Cotizaciones } from '../component/cotizaciones';
import { Pedidos } from '../component/pedidos';
import { Inicio } from '../component/inicio';

import React from 'react'

export const Rutas = () => {
  return (
    <Routes>
    <Route path="/" element={<Inicio />}></Route>
    <Route path="/src/component/cotizaciones.jsx" element={<Cotizaciones />}></Route>
    <Route path="/src/component/pedidos.jsx" element={<Pedidos />}></Route>
</Routes>
  )
}
