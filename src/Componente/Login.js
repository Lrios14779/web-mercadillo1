import React, {Component} from 'react';
import 'Login.css';
import icono1 from './img/icon1.jpg';

function Login(){
    return(
<div className="container" id="cuadro">
    <figure>
       <img src={icono1} alt="" className="img-fluid" />
    </figure>
    <h1>Iniciar sesion con su cuenta</h1>
    <button type="">Login with Facebook</button>
    <button type="">Sign in with Google</button>
    <h1>Correo electronico</h1>
     <h1>Contraseña</h1>
     <button type="">Mostrar</button>
     <h2>¿Olvido su contraseña?</h2>
     <button type="">Iniciar sesion</button>
     <h1>¿No tiene una cuenta? Cree una aqui</h1>
</div>
    );
}
export default Login;