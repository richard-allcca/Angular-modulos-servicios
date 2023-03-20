import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private url: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj';
  private historial: string[] = [];

  public resultados: Gif[] = JSON.parse(localStorage.getItem("lsResultados")!) || [];

  get getHistorial() {
    return [...this.historial];
  }

  constructor(private http: HttpClient) {
    this.historial = JSON.parse(localStorage.getItem("historial")!) || [];
    // if (localStorage.getItem("lsResultados")) {
    //   this.resultados = JSON.parse(localStorage.getItem("lsResultados")!) || [];
    // }
  }

  buscarGif(query: string) {

    let queryString = query.trim().toLowerCase();

    if (!this.historial.includes(queryString)) {
      this.historial.unshift(queryString);
      this.historial = this.historial.slice(0, 10);

      localStorage.setItem("historial", JSON.stringify(this.historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', queryString);

    this.http.get<SearchGIFResponse>(`${this.url}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        localStorage.setItem("lsResultados", JSON.stringify(resp.data));
        return this.resultados = resp.data;
      });
  }

}
