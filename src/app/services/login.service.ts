import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //generar token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/login`,loginData);
  }
}
