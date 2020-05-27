import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});
  }

  /*http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/Rodrigo*/
  consultarUser(nome: String): Observable<any>{
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

}
