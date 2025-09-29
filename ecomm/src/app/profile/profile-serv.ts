import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,delay } from 'rxjs';
import { profileInt } from './profileInter';

@Injectable({
  providedIn: 'root'
})
export class ProfileServ {
  private jsonUrl = 'https://viveksharma1218.github.io/host_api/data.json';
constructor(private http:HttpClient){}
 getData(): Observable<profileInt[]> {
    return this.http.get<profileInt[]>(this.jsonUrl).pipe(delay(1000));
  }
}
