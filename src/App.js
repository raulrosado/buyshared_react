import './App.css';
import Main from './pages/Main.js';
import Detalles from './pages/Detalles.js';
import { Routes, Route, Link } from "react-router-dom";

function App({ Component }) {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main />} />
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
