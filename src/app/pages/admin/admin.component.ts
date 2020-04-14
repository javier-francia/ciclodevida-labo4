import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AdminComponent implements OnInit {
  title = 'Input y Output - Javier Francia';
  listadoPrincipal: Alumno[];
  alumnoSeleccionado: Alumno;

  constructor() { 
    /* Obtencion de datos previos */
    this.listadoPrincipal = new Array();
  }

  ngOnInit(): void {
  }

  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    this.listadoPrincipal.push(NuevoAlumno);   
  }
  
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado = NuevoAlumno;   
  }
}
