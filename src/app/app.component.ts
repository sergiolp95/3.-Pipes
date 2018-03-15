import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Sergio';
  nombre2: string = 'SeRgIo lÓpEz PéReZ';
  array = [0,1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  numero:number = 0.234;
  dinero:number = 1234.5;
  heroe ={
    nombre: 'Logan',
    clave: 'Lobezno',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: '19'
    }
  };
  valorDePromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Llegan los datos..'),3000);
  })
  fecha:Date = new Date();
  videico:string = 'X-x7eZOdBFM';
  activar:boolean = true;

}
