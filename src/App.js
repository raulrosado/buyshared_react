import './App.css';
import Main from './pages/Main.js';
import Detalles from './pages/Detalles.js';
import Setting from './pages/Setting.js'
import DetallesEventos from './pages/DetallesEventos.js';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/login/Login';
import Registro from './pages/Registro'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser,saveLocalStorage } from "./actions";

function App({ Component }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  let isLogged = false
  // if(user.token !== ""){
  //   isLogged = false 
  // }else{ 
  //   isLogged = true;
  // }
  if(user !== null){
    if(user.length === 0){
      const buyshare = JSON.parse(localStorage.getItem('buyshare'));
      dispatch(saveLocalStorage (buyshare))
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={NotFound} />
      </Routes>
      
      <Routes>
        <Route path="/detallesEventos/:id" element={<DetallesEventos />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/main" element={<Main />} />
        <Route path="/setting" element={<Setting />} />  
      </Routes>
       
    </div>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}
function NotAuthorized() {
  return <>No esta autorizado estar aqui</>;
}

export default App;
