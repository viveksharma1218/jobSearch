import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServ {
  private jsonUrl = 'https://viveksharma1218.github.io/host_api/data.json';
constructor(private http:HttpClient){}
 getData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
