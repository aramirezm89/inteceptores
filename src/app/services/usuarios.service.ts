import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {

    return this.http
      .get<any>('https://reqrkes.in/api/user')
      .pipe(
        map((res) => res.data));
  }


}
