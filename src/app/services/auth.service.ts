import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
//import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token:any;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    //private storage: Storage,
    private env: EnvService,
  ) { }
/*  login(phone: String, password: String) {
    //return this.http.post(this.env.API_URL + 'auth/login',
    return this.http.post(this.env.API_URL + '/login',
      {phone: phone, password: password},{observe:'response'}
    ).subscribe(data=>{
      let jwt = data.headers.get("Authorization");
      sessionStorage.setItem("token", jwt);

    })
  }
   */ 
   login(phone: String, password: String) {
    //return this.http.post(this.env.API_URL + 'auth/login',
    return this.http.post(this.env.API_URL + '/login',
      {phone: phone, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
   
  register(username: String, firstName: String, lastName:String, email: String, phone: String , password: String, repassword:String) {
   // return this.http.post(this.env.API_URL + 'auth/register',
   return this.http.post(this.env.API_URL + '/register',
      {username:username, firstName:firstName, lastName:lastName, email:email, phone:phone, password: password, repassword:repassword,}
    )
  }
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    //return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    return this.http.get(this.env.API_URL + '/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }
  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+""+this.token["access_token"]
      //'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
   // return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
   return this.http.get<User>(this.env.API_URL + '/user/connection/699999999', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}