import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../app.storage';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    //private storage: NativeStorage,
    private storageService: StorageService,
    private env: EnvService,
    private router: Router,
    private toastController: ToastController
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
    return this.http.post(this.env.API_URL + 'registerViaDraglet',
      {username: username, email: email, password: password}
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
