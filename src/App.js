import React, { useEffect, useState } from "react";
import './App.css';
import Main from './pages/Main.js';
import Detalles from './pages/Detalles.js';
import Setting from './pages/Setting.js'
import DetallesEventos from './pages/DetallesEventos.js';
import AcceptSolicitud from './pages/AcceptSolicitud';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/login/Login';
import Registro from './pages/Registro'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser,saveLocalStorage } from "./actions";
import NotRegisteredUser from './pages/NotRegisteredUser';
import { Router } from "react-router-dom";  

function App({ Component }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    if(user === null){
      setIsAuth(false)
    }else{
      setIsAuth(true)
      if(user.length === 0){
        const buyshare = JSON.parse(localStorage.getItem('buyshare'));
        dispatch(saveLocalStorage (buyshare))
        setIsAuth(false)
      }else{
        setIsAuth(true)
      }
    }
  }, [user])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/accept/:token" element={<AcceptSolicitud />} />
        <Route path="*" element={NotFound} />
        <Route path="/not" element={<NotRegisteredUser />} />
      </Routes>
      {isAuth ? (
        <Routes>
          <Route path="/main" exact element={<Main />} ></Route>
          <Route path="/detallesEventos/:id" exact element={<DetallesEventos />} ></Route>
          <Route path="/setting" exact element={<Setting />} ></Route>
          <Route path="/detalles/:id" exact element={<Detalles />}></Route>
      </Routes>
      ) : 
      (<Routes>
        <Route path="/detallesEventos/:id" exact element={<NotRegisteredUser />} />
        <Route path="/detalles/:id" exact element={<NotRegisteredUser />} />
        <Route path="/main" exact element={<NotRegisteredUser />} />
        <Route path="/setting" exact element={<NotRegisteredUser />} />
      </Routes>
      )}
    </div>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}

export default App;
