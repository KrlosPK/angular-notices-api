import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import '../components/formulario/formulario.component';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) {}

  getNoticias(parametros: any): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=0a245ee1b1a44da8a246642a4209691e`;

    return this.http.get(URL);
  }
}
