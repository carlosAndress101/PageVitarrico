import "./login.css"
import React from "react";
import { Link } from "react-router-dom";

function Login() {
return (
    <body className="Fondo-Login">
    <div className="contenedor">
        <img className="Logo-Vtarrico" src="src\components\image\Vitarrico.ico" alt="logo vitarrico" />
        <input id="email" type="email" placeholder="@correo" required />
        <input id="contraseña" type="password" placeholder="contraseña" required maxLength={"10"} minLength={"5"}/>
        <button className="boton-inicio"> <Link to="/Inicio">Inicio</Link></button>
        <a className="R-contraseña" href="https://email-send-roan.vercel.app/" target={"blank"}> Recuperar contraseña</a>
    </div>
    </body>
);
}

export default Login;