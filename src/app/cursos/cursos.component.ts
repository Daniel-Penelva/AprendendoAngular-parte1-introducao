import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

 nome: string;
 listaLinguagemProgramacao:string[] = ["Java", "Angular"];;

  constructor() {

    this.nome = 'Daniel';

    for(let i=0; i<this.listaLinguagemProgramacao.length; i++){
      let linguagensProgramacao = this.listaLinguagemProgramacao[i];
    }
   }

  ngOnInit(): void {
  }

}
