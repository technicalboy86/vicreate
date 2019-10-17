import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { StorageService } from '../../app.storage';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private env: EnvService
  ) { }

  login(email: String, password: String) {

   return this.http.post<any>(this.env.API_URL + 'loginViaDraglet', {email: email, password: password})
            .pipe(map(res => {
                if(res.token){
                  this.storageService.add('token', res.token);

                  this.token = res.token;
                  this.isLoggedIn = true;
                }
                return res;
            }));
  }

  register(username: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + 'forgot',
      {username: username, email: email, password: password}
    ).pipe(map(res => {
        return res;
    }));
  }

  forgot(email: String) {
    return this.http.post(this.env.API_URL + 'forgotpassword',
      {email: email}
    ).pipe(map(res => {
        return res;
    }));
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storageService.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  user() {
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    // });
    //
    // return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
    // .pipe(
    //   tap(user => {
    //     return user;
    //   })
    // )
    return this.storageService.get('token');
  }

  getToken() {
    return this.storageService.get('token');
  }
}
