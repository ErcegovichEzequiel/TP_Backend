import { Nadvar } from './component/nadvar';
import { Rutas } from './routes/rutas';
import { Footer } from './component/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
      <Nadvar />
      <Rutas />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
