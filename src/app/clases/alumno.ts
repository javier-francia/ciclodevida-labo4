export class Alumno {
    apellido:string;
    nombre:string;
    legajo:number;
    
    public constructor(apellido:string, nombre:string, legajo:number)
    {
        this.apellido = apellido;
        this.legajo = legajo;
        this.nombre = nombre;
    }
}
