import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfil = 'Admin';
  lista = [
    {
      name : "Javier",
      perfil : 'Admin'
    },
    {
      name : "Juanca",
      perfil : 'Dev'
    },
    {
      name : "Tito",
      perfil : 'DBA'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
