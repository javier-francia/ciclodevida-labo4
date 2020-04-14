import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})

export class FormAlumnoComponent implements OnInit {
  @Output() alumnoCreado: EventEmitter<any>= new EventEmitter<any>();
  unAlumno:Alumno;

  constructor() { 
   
  }

  ngOnInit() {
  }

  nuevoAlumno()
  {
    let legajo:number =Math.floor((Math.random() * 1000) + 1);
    this.unAlumno= new Alumno("","",legajo);
  }

  crearAlumno()
  {
    this.alumnoCreado.emit(this.unAlumno);
    this.unAlumno = null;
  }
}
