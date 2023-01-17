import './App.css';
import Main from './pages/Main.js';
import Detalles from './pages/Detalles.js';
import DetallesEventos from './pages/DetallesEventos.js';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Registro from './pages/Registro'

function App({ Component }) {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detallesEventos/:id" element={<DetallesEventos />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="*" element={NotFound} />
        </Routes>
    </div>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}

export default App;
