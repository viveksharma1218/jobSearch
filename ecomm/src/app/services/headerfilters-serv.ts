import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderfiltersServ {
  titleData = new BehaviorSubject<string>('AllProfile');
  companyData = new BehaviorSubject<string>('AllCompany');
  locationData = new BehaviorSubject<string>('AllLocation');

  currentTD$:Observable<string> = this.titleData.asObservable();
  currentCD$:Observable<string> = this.companyData.asObservable();
  currentLD$:Observable<string> = this.locationData.asObservable();

  changeData(data:string){
    this.titleData.next(data);
  }
  changeCompanyData(data:string){
    this.companyData.next(data);
  }
  changeLocationData(data:string){
    this.locationData.next(data);
  }
}
