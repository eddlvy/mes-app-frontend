import React from "react";
import './style/welcome.css';
import LoginComponent from "../components/login";
import img from '../assets/pexels-nietjuh-796602.jpg';



function WelcomePage() {
  let date = new Date();

  return (

    <div className="main-container">
      <div className="header">
        <h1 className="main-title">Abastecimientos del Mes</h1>
        <p className="date">{JSON.stringify(date.toLocaleDateString()).replace(/"/g, "")}</p>
      </div>
      <div className="container-actions">
        <img className="img" src={img} alt="calculator" />
        <div className="container-login">
          <LoginComponent></LoginComponent>
        </div>

      </div>
      <div className="container-footer">
        <p className="footer">copyright EduProductions @{date.getFullYear()}</p>
      </div>
    </div>
  )
}

export default WelcomePage;