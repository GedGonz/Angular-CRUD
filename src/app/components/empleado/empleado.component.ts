import { Component, OnInit } from '@angular/core';
import { empleado } from '../../model/empleado';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  titulo = 'Angular';

  empleados: empleado[] = [
    {
      id: 1,
      nombre: 'Ged',
      posicion: 'Desarrollo',
      email: 'gedgonz7@gamail.com'
    },
    {
      id: 2,
      nombre: 'Gedgonz',
      posicion: 'Desarrollo',
      email: 'gedgonz7@gamail.com'
    },
    {
      id: 3,
      nombre: 'GedXel',
      posicion: 'Desarrollo',
      email: 'gedgonz7@gamail.com'
    }];

    model: empleado = new empleado();
    isupdate = false;
    elementoarray: number;
  ngOnInit() {
  }

    nuevoEmpleado(): void {
      if (this.model.id === 0) {
        this.empleados.push(this.model);
      }
      this.model = new empleado();
      console.log(this.empleados);
    }
    // tslint:disable-next-line:variable-name
    editarEmpleado(_empleado: empleado): void {
      /*this.model.nombre = this.empleados[i].nombre;
      this.model.posicion = this.empleados[i].posicion;
      this.model.email = this.empleados[i].email;*/
      this.model = _empleado;
      this.isupdate = true;
      console.log(_empleado);

    }
    /*
    actualizarEmpleado(): void {
      this.empleados[this.elementoarray].nombre = this.model.nombre;
      this.empleados[this.elementoarray].posicion = this.model.posicion;
      this.empleados[this.elementoarray].email = this.model.email;
      this.empleados.findIndex(x => x === this.model).
      this.isupdate = false;
      this.model = new empleado  ();
      console.log(this.model);
    }*/
    eliminarEmpleado(i): void {
      const eliminado = this.empleados.splice(i, 1);
      console.log(eliminado);
    }
}
