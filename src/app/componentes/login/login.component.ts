import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  name: string;
 
  constructor(private route: Router){  }

  usuario = new Usuario();
  ngOnInit(): void {
  }

  Ingresar() {
    if (this.usuario.LogInUsuario())
    {
      this.route.navigate(['home']);
    }
    else
    {
      this.route.navigate(['error']);
    }
  }

  ForgotPassword(){
    alert('Pero que boludo!');
  }
}