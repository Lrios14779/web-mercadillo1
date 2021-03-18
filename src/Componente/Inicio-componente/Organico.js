import React, {Component} from 'react';
import img1 from '../img/icon2.jpg';
import img2 from '../img/icon3.png';
import 'Organico.css';

import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../../entities/producto';
import { Suministro } from '../../entities/suministro';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
@Input() suministroX:Suministro;

listaSuministros: Suministro[ ];
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    console.log(this.suministroX);
    this.leerProductos(5)
  }

  leerProductos(): void{
    this.productosService.productosSelect(idsuministro).subscribe(
      (res: producto[ ]) => {
this.listaProductos = res;
console.log(res)
      }     
    )
  }
}

function Organico(){
    return(
        <div className="container" id="cuadro">
        <div className="row">
        <div className="col-md-3">
        <figure>
            <img src={img1} alt="" className="img-fluid"/>
        </figure>
            <h5>Cacao en polvo 200 gr > Segun tu dieta > Organico</h5>
        </div>        
        </div>
        <div className="row">
            <div className="col-md-4">
                
            </div>
            <div className="col-md-8">
                <h1>Organico</h1>
                <figure>
                    <img src={img2} alt="" className="img-fluid" />
                </figure>
            </div>
        </div>
        </div>

<section id="organicos" class="padded">
    <div class="container">
    <table class=" table table-striped table-bordered">
    <thead class="thead-dark">
    <tr>
   <th>Huevo de gallinas libres 12 und</th>
    <th>S/. 12.40(-5%)</th>
     
    </tr>
    </thead>
    <tbody>
<tr *ngFor="let item of listaOrganicos">
<td>{{itemOrganico.idorganico}}</td> 
<td>{{itemOrganico.nombre}}</td> 
<td>{{itemOrganico.cantidad}}</td>
<td>{{itemOrganico.precio}}</td>
</tr> 
    </tbody>    
    </table>
    <table class=" table table-striped table-bordered">
    <thead class="thead-dark">
    <tr>
   <th>Cacao en polvo 200 gr</th>
    <th>S/. 14.70(-6%)</th>
     
    </tr>
    </thead>
    <tbody>
<tr *ngFor="let item of listaOrganicos">
<td>{{itemOrganico.idorganico}}</td> 
<td>{{itemOrganico.nombre}}</td> 
<td>{{itemOrganico.cantidad}}</td>
<td>{{itemOrganico.precio}}</td>
</tr> 
    </tbody>    
    </table>         
    </div>
</section>
    );
}
export default Organico;