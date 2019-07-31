import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public authenticated:boolean;
  public token:string;

  
  constructor() { }
  public connexion(email:string, password:string){
    if(email=='prospero@gmail.com' && password=='1234'){
      this.authenticated=true;
      this.saveToken();
    }
    else{
      this.authenticated=false;
    }
    return this.authenticated;
  }
  private saveToken() {
    this.token="azerty";
    localStorage.setItem("myToken",this.token);
  }
  public loadToken(){
    this.token=localStorage.getItem("myToken");
    if(this.token=='azerty'){
      this.authenticated=true;
    }
    else{
      this.authenticated=false;
    }
    return this.authenticated;
  }
  deconnexion(){
    localStorage.removeItem('myToken');
  }
}
