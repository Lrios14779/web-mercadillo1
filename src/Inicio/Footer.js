import React, {Component} from 'react';
import './Footer.css';

function Footer(){
    return(
<div className="container">   
<div className="row" id="footer">
    <figure className="col-sm-2">    
    <h4>Contactanos</h4>     
     <td></td>
    <h7>
    hola@mercadillo.pe 
   clientes@mercadillo.pe
  Síguenos en Instagram
    Síguenos en Facebook
    ¿Quieres vender con nosotros?</h7>
   
     </figure>
     <figure className="col-sm-2"> 
        <h4>Categorias</h4>         
         <td></td>
        <h7>
        Compra por valores
        Alimentos
        Bebidas & Licores
        Salud & Belleza
         Hogar
       Mascotas
        Ofertas
        Compra por marcas
        </h7>
    </figure>
    <figure className="col-sm-2"> 
        <h4>Estilos de vida</h4>        
         <td></td>
         <h7>
         Organico
         Libre de gluten
         Vegano
         Libre de transgénicos
         Superfoods
         Apto para niños
         Compostable
         Comercio justo
         Negocio liderado por mujeres</h7>
    </figure>   
    <figure className="col-sm-2"> 
        <h4>Politicas</h4>        
        <td></td>
         <h7>
         Términos y condiciones
         Envíos en Lima y Callao
         Envíos a provincias
         Políticas de privacidad y políticas de cookies
         Medios de pagos
         Libro de reclamaciones</h7>
    </figure>  
</div>  
</div> 
    );
}
export default Footer;