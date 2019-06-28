import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  titulo="Angular";
  
  empleados=[
    {
      nombre:"Ged",
      posicion:"Desarrollo",
      email:"gedgonz7@gamail.com"
    },
    {
      nombre:"Gonz",
      posicion:"Diseñador",
      email:"gedgonz7@gamail.com"
    },
    {
      nombre:"GedGonz",
      posicion:"BI",
      email:"gedgonz7@gamail.com"
    }];
    
    model:any={};

    nuevoEmpleado(): void{
      this.empleados.push(this.model);
      this.model={};
      console.log(this.empleados);
    }
    editarEmpleado(i:number):void{
      this.model.nombre=this.empleados[i].nombre;
      this.model.posicion=this.empleados[i].posicion;
      this.model.email=this.empleados[i].email;
      console.log(this.empleados[i]);
    }
    actualizarEmpleado():void{
      
    }
    eliminarEmpleado(i:number):void{
      let eliminado = this.empleados.splice(i,1);
      console.log(eliminado);
    }
}
