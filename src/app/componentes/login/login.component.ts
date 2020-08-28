import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo';
  
  ngOnInit() {
  }

  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }

}
