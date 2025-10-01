import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderfiltersServ {
  titleData = new BehaviorSubject<string>('');
  companyData = new BehaviorSubject<string>('');
  locationData = new BehaviorSubject<string>('');

  currentTD:Observable<string> = this.titleData.asObservable();
  currentCD:Observable<string> = this.companyData.asObservable();
  currentLD:Observable<string> = this.locationData.asObservable();

  changeData(data:string){
    this.titleData.next(data);
  }

}
