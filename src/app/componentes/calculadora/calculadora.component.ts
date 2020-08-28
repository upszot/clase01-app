import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


  export class CalculadoraComponent {
    public edadUno = 0;
    public edadDos = 0;
    public resultado = 0;
    public promedio = 0;
    constructor() {}
    calcular(): any {
      this.resultado = this.edadUno + this.edadDos;
      this.promedio = this.resultado / 2;
    }

    limpiar(): any {
      this.edadUno = 0;
      this.edadDos = 0;
      this.resultado = 0;
      this.promedio = 0;
    }
  }
