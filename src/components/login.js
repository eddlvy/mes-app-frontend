import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../context/context";
import { useNavigate } from "react-router-dom";
import './style/login.css';


function LoginComponent() {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const { logged, setLogged } = useContext(Context);
  const [state, setState] = useState("");
  const { token, setToken } = useContext(Context);

  let navigate = useNavigate();

  function postToServer(e) {
    const dataToPost = {
      nombre: nombre,
      clave: clave
    }


    e.preventDefault();
    axios.post('http://localhost:5000/login', dataToPost).then(res => setToken(res.data.token)).catch(error => { setState(`Email o Clave no Correcta, Intente de nuevo`) })

    if (token) {
      setLogged(true)
      navigate('/user/home');
    }
  }

  return (
    <div className="div-login">

      <p className="text-login">Accede Aqui</p>
      <form className="form-login" onSubmit={postToServer} method="post">
        <label className="label-login">Escribe Nombre de Usuario</label>
        <input className="input-login" type="text" id="nombre-login" onChange={(e) => { setNombre(e.target.value) }} required></input>
        <label className="label-login">Escribe Clave de Entrada</label>
        <input className="input-login" type="password" id="clave-login" value={clave} onChange={(e) => { setClave(e.target.value) }} required></input>
        <input className="submit-login" type="submit" value="Doble Click Entrar"></input>
      </form>
      <p className="text-login">{!logged ? state : ""}</p>


    </div>
  )
}


export default LoginComponent;