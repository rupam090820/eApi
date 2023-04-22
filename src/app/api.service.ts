import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //step 1

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }  //step 2
  getApi(){
    return this.http.get('http://universities.hipolabs.com/search?country=india&#39');
  }

}
