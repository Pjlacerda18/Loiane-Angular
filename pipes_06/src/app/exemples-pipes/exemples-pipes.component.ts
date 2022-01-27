import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemples-pipes',
  templateUrl: './exemples-pipes.component.html',
  styleUrls: ['./exemples-pipes.component.css']
})
export class ExemplesPipesComponent implements OnInit {

livro: any = {
  titulo: 'Learning javaScript',
rating: 4.54321,
numeroPaginas: 314,
preco: 44.99,
dataLancamento: new Date(2016, 5, 23),
url: 'http://a.co/glqjRP'
};


livros: string[] =['Java', 'Angular 2'];

  filtro!: string;

  addCurso(valor: string){
    this.livros.push(valor)
  }

  obterCursos() {
    if(this.livros.length === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter((v) => {if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
    return true;
  }
  return false
});
  }
   valorAsync = new Promise((resolve, reject) =>{
  setTimeout(() => resolve('Valor assíncrono'), 2000)
});

   constructor() { }

  ngOnInit(): void {
  }

}
