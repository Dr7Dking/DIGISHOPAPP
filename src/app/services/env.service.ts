import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://digishopherokubackend.herokuapp.com';
  constructor() { }
}
