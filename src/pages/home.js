import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print'
import './style/home.css';
import axios from "axios";
import { Context } from "../context/context";


function HomePage() {
  const [state, setState] = useState("")
  const [data, setData] = useState([])
  const [inputValues, setInputValues] = useState({})
  const { token } = useContext(Context)
  const headers = useMemo(() => ({
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }), [token]);
  const componentRef = useRef();
  // cargar los datos 
  useEffect(() => {
    axios.get('https://mes-app-1d1333e2d2a7.herokuapp.com/user/home', headers).then(res => setData(res.data)).catch(error => setState(error))
  })
  // para updatear comprado del mes segun input 
  const clickHandler = function (producto) {
    const prod = producto
    const obj = inputValues
    const dataToPost = {
      comprado: obj[prod]
    }
    axios.post(`https://mes-app-1d1333e2d2a7.herokuapp.com/user/home/${prod}`, dataToPost, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
  }
  // to reset comprado del mes
  const empezarMes = function () {

    axios.post('https://mes-app-1d1333e2d2a7.herokuapp.com/user/home/update/reset', null, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
  }
  // hook para imprimir
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  return (
    <div className="main-container" ref={componentRef}>
      <div className="header"><h1>Productos</h1><button onClick={() => empezarMes()}>Empezar Mes</button><button onClick={handlePrint}>Imprimir</button></div>

      <p className="state">{state}</p>
      {data.map((elem, index) => <div key={index}><p className="productos">Producto: {elem.producto} - Cantidad Mes: {elem.cantidad} -  Total : {elem.total} - Comprado : {elem.comprado} <input className="input-cantidad" type="number" onChange={(e) => { setInputValues({ ...inputValues, [elem.producto]: e.target.value }) }} /> <button onClick={() => { clickHandler(elem.producto) }}>Guardar</button></p></div>)}

    </div>
  )

}


export default HomePage;