import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user = '';
    public password = '';

    public user_valido = 'pepe';
    public password_valido = '***';

  constructor( private rutas:Router) { }

  ngOnInit(){

  }


  login(){
    if(this.user==this.user_valido && this.password==this.password_valido){
      this.rutas.navigate(['bienvenido']);
    }else{
      this.rutas.navigate(['error']);
    }
  }


}
