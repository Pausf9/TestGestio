import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../apiResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  

  public getUser() {
    return this.http.get('https://localhost:44390/Usuaris/Last');

  }

  public getLogin(user: String, password: String) {
    return this.http.get<ApiResponse>('https://localhost:44390/Usuaris/IsIn/'+user+'/'+password, this.httpOptions);

  }

}
