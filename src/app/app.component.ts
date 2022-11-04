import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularNoticias';

  listNoticias: any[] = [];

  constructor(private noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    this.noticiaService.getNoticias(parametros).subscribe(
      (data) => {
        this.listNoticias = data.articles;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
