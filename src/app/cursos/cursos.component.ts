import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
 nome: string;
 cursos: string[];

  constructor(public cursosServices: CursosService) {
     this.nome = 'Daniel';
     this.cursos = this.cursosServices.getcursos();
   }

  ngOnInit(): void {
  }

}
