import { Component,inject,OnInit } from '@angular/core';
import { ProfileServ } from './profile-serv';
import{profileInt} from './profileInter';
import { FullInfo } from './full-info/full-info';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map, Observable } from 'rxjs';
import{HeaderfiltersServ} from '../services/headerfilters-serv';
import { Router } from '@angular/router';
import { Header } from '../header/header';


@Component({
  selector: 'app-profile',
  imports: [FullInfo, AsyncPipe,Header],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
  profileData$!:Observable<profileInt[]>;
  filterData!:Observable<profileInt[]>;
  selectedProfile!:profileInt;
  // filter data received from header component
  titleData$!:Observable<string>;
  companyData$!:Observable<string>;
  locationData$!:Observable<string>;
  profilenewId:number= 0;
  router = inject(Router);
  constructor(private ProfileServ:ProfileServ, private headerser:HeaderfiltersServ){
    //  this.ProfileServ.getData().subscribe(
    //     (data)=>{this.profileData$ = data;
    //       console.log(data)
    //     }
    //   );
  }

  ngOnInit(): void {
     this.profileData$ = this.ProfileServ.getData();
     this.titleData$ = this.headerser.currentTD$;
     this.companyData$ = this.headerser.currentCD$;
     this.locationData$ = this.headerser.currentLD$;
     this.getFilterData();
  }

  getProfile(profile:profileInt):void{
    console.log(profile);
    this.selectedProfile=profile;
    
  }
  getFilterData(){
   this.filterData = combineLatest([
    this.profileData$,
    this.titleData$,
    this.companyData$,
    this.locationData$]).pipe(
    map(([profiles,title,company,location])=>{
      return profiles.filter((profile)=>{
        const titleMatch = profile.title == title;
        const companyMatch = profile.company == company;
        const locationMatch = profile.location == location;
        // Add logic to skip filtering if the filter value is empty (e.g., '')
          const finalTitleMatch = (title == 'AllProfile' || titleMatch);
          const finalCompanyMatch = (company == 'AllCompany' || companyMatch);
          const finalLocationMatch = (location == 'AllLocation' || locationMatch);
        return finalTitleMatch && finalCompanyMatch && finalLocationMatch;
      })
    })
   )
  
  }
  applyForm(){
    this.router.navigate(['/apply'])
  }
 
}
