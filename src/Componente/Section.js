import React, {Component} from 'react';
import './section.css';
import img1 from '../img/icono1.png';
import img2 from '../img/icono2.png';
import img3 from '../img/icono3.png';
import img4 from '../img/icono4.png';
import img5 from '../img/icono5.png';


function Section(){
return(

<div className="container">
   <h4 id="t1"><b>COMPRA SEGUN TUS VALORES</b></h4>
   <div className="row" id="paso1">
    <figure className="col-sm-2">
    <img src={img1} alt="" className="img-fluid" />
    <h6>Superfoods</h6>
     </figure>
     <figure className="col-sm-2">
        <img src={img2} alt="" className="img-fluid" />
        <h6>Compostable</h6>
    </figure>
    <figure className="col-sm-2">
        <img src={img3} alt="" className="img-fluid" />
        <h6>Vegano</h6>
    </figure>
    <figure className="col-sm-2">
        <img src={img4} alt="" className="img-fluid" />
        <h6>Negocio liderado por mujeres</h6>
    </figure>
    <figure className="col-sm-2">
        <img src={img5} alt="" className="img-fluid" />
        <h6>Ver todos</h6>
    </figure>
</div> 
<div className="container" id="paso2">
   <h2>Nuestros favoritos del mes</h2> 
<div className="row" id="figura">
    <figure className="col-sm-3">
    <img src={img1} alt="" className="img-fluid" />
    <h5>Leche de almendras sin azucar 946ml.</h5>
    <h5>S/.16.10</h5>
     </figure>
     <figure className="col-sm-3">
        <img src={img2} alt="" className="img-fluid" />
        <h5>Huevos de galilina libres 12 und.</h5>
        <h5>S/.12.40</h5>
    </figure>
    <figure className="col-sm-3">
        <img src={img3} alt="" className="img-fluid" />
       <h5>Shampoo en barra 70 gr.</h5>
        <h5>S/.47.00</h5>
    </figure>
    <figure className="col-sm-3">
        <img src={img4} alt="" className="img-fluid" />
        <h5>Capsula de camu camu organico 100 x 500 mg.</h5>
        <h5>S/.30.70</h5>
    </figure> 
</div>  
</div> 
<div className="container" id="paso3">
<div className="row">
<div className="col-md-4">
</div>
<div className="col-md-4">
    <h4>CONOCE MAS DE MERCADILLO</h4>
   <h6>En mercadillo.pe, creemos que los alimentos nutritivos y artículos sostenibles son un derecho y 
   no un privilegio. Por eso estamos en una misión para facilitarte la compra de lo que es bueno para ti, 
   tu familia, tu comunidad y tu planeta.</h6>
</div>
<div className="col-md-4">
</div>
</div>
</div>
<div className="container" id="paso4">
   <h4>QUE DICEN NUESTROS CLIENTES DE NOSOSTROS</h4> 
<div className="row" id="s1">
    <figure className="col-sm-4" id="col1">    
    <h4>POR FIN PUEDO PEDIR PRODUCTOS SALUDABLES A LA PUERTA DE MI CASA</h4>
    <h5>Me encanta pedir por mercadillo.pe porque puedo programar el dia y hora en que recibiria mis pedidos</h5>
    <tr></tr>
    <tr></tr>
   <h5>Estefania Durand</h5>
     </figure>
     <figure className="col-sm-4" id="col2"> 
        <h4>GRAN VARIEDAD DE PRODUCTOS SALUDABLES EN UN SOLO LUGAR</h4>
        <h5>En mercadillo puedo conseguir muchos productos para mi y mis mascotas.</h5>
         <tr></tr>
    <tr></tr>
        <h5>Claudia Nuñez</h5>
    </figure>
    <figure className="col-sm-4" id="col3"> 
        <h4>ME ENCATA TODA LA INFORMACION QUE MUESTRAN DE LOS PRODUCTOS</h4>
         <h5>Mercadillo.pe hace que elegir entre produtos sea sencillo ya que te da informacion detallada</h5>
          <tr></tr>
    <tr></tr>
         <h5>Diana Briones</h5>
    </figure>   
</div>  
</div> 
</div>

);

}
export default Section;