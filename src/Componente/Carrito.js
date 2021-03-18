import React, {Component} from 'react';
import { Mercadillo } from 'src/app/entities/mercadillo';
import{ Itemcarrito } from 'src/app/entities/itemcarrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  mascotitas: Mercadillo[];
  items: Itemcarrito[] = [];
  faTimes = faTimes;
  
    constructor(
       private activatedRoute:ActivatedRoute,
       private mascotitasServiceMercadilloService
    ) {}
  
    ngOnInit(): void {
  this.activatedRoute.params.subscribe(
    params =>{
      const idmercadillo = params.idmercadillo;
      console.log(idproducto);
      if(idmercadillo){
        this.mercadilloSolo(idmercadillo)
      }
      else{
        this.mostrarCarrito();
      }
    }); 
    }
    mascotitaSolo(idmercadillo):void{
     this.mercadillosService.mascotitaSolo(idmascotita).subscribe(
       (res: Mascotita[]) => {
        console.log(res);
         this.mercadillos = res;
          var itemcarrito: Itemcarrito = {
          mercadillo: this.mercadillos[0],
           cantidad: 1
         };
         console.log(itemcarrito.cantidad);
         console.log(itemcarrito.mercadillo.nombre);
  
         if(localStorage.getItem("carrito") === null){
           //Si el carrito esta vacio (es decir el localStorage)
           let carrito: any = [];
           carrito.push(JSON.stringify(itemcarrito));
           localStorage.setItem("carrito",JSON.stringify(carrito));
           //Asi se agrega un producto al carrito vacio
                 }
                 else{
                   //si el carrito existe recuperara los datos almacenados.
                   let carrito: any = JSON.parse(localStorage.getItem("carrito"));
  
                   //Para detectar si ya se pidio antes el mismo producto
                   let index: number = -1;
                   for(var i = 0; i< carrito.length; i++){
                     let item: Itemcarrito = JSON.parse(carrito[i]);
                     if(item.mercadillo.idmercadillo === idmercadillo){
                       //Si en contro que el producto nuevo estaba en el carrito
                       //entonces en index guarda la posicion
                       index = i;
                       break;
                     }
                   }
                   if(index === -1 ){
                     //Si es un nuevo producto para el carrito
                     carrito.push(JSON.stringify(itemcarrito));
                     localStorage.setItem("carrito",JSON.stringify(carrito));
                   }
                   else{
                     //Si el produto ya existe en el carrito
  let item: Itemcarrito = JSON.parse(carrito[index]);
  itemmercadillo.cantidad++;//La cantidad se incrementa en uno
  carrito[index] = JSON.stringify(item);
  localStorage.setItem("carrito",JSON.stringify(carrito));
                   }
                 }
                 this.mostrarCarrito();
                   
          }
     );
    }
     mostrarCarrito(){
       let carrito:any = JSON.parse(localStorage.getItem("carrito"));
       if(carrito != null){
         for(var i = 0; i< carrito.length; i++){
           let item = JSON.parse(carrito[i]);
           this.items.push({
             mercadillo: item.mercadillo,
             cantidad: itemmercadillo.cantidad
           })
         }
       }
      }
      eliminar(itemEliminar:Itemcarrito){
        let carrito: any = JSON.parse(localStorage.getItem("carrito"));
        let index: number = -1;
        for(var i = 0; i< carrito.length; i++){
          let item: Itemcarrito = JSON.parse(carrito[i]);
          if(item.mercadillo.idmercadillo === itemEliminar.mercadillo.idmercadillo){
            carrito.splice(i,1)
            break;
          }
        }
        localStorage.setItem("carrito",JSON.stringify(carrito));
        this.items=[];
      this.mostrarCarrito();
      }
}

function Carrito(){
      return(
        
<section id="carrito" class="padded">
    <div class="container">
       <h2> Cochecito de adquirir</h2>
       <table class="table table-striped table-bordered">
               <thead class="thead-dark">
               <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Propietario</th>
              <th>raza</th>
              <th>Edad</th>
              <th></th>
               </tr>
               </thead>
               <tbody>
                   <tr *ngFor="let item of items">
                   <td>{{item.mercadillo.idperro}}</td>
                    <td>{{item.mercadillo.nombre}}</td>
                     <td>{{item.perro.precio}}</td>
                     <td>{{item.cantidad}}</td>
                      <td>{{item.mercadillo.precio * item.mercadillo.cantidad}}</td>
                       <td><fa-icon [icon]="faTimes" (click)="eliminar(item)"></fa-icon></td>
                   </tr>
               </tbody>
           </table>
    </div>
</section>

    );
}
export default Carrito;