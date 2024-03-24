import { Nadvar } from "./component/nadvar";
import { Rutas } from "./routes/rutas";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Nadvar />
      <Rutas />
    </Router>
    </div>
  );
}

export default App;
