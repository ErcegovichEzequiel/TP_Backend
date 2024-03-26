import { Route, Routes } from 'react-router-dom';
import { Cotizaciones } from '../component/cotizaciones';
import { Pedidos } from '../component/pedidos';
import { Inicio } from '../component/inicio';
import React from 'react'

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/pedidos" element={<Pedidos />}></Route>
      <Route path="/cotizaciones" element={<Cotizaciones />}></Route>

    </Routes>
  )
}
