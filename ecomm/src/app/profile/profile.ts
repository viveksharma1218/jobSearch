import { Component,OnInit } from '@angular/core';
import { ProfileServ } from './profile-serv';
import{profileInt,Job} from './profileInter';
import { FullInfo } from './full-info/full-info';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map, Observable } from 'rxjs';
import{HeaderfiltersServ} from '../services/headerfilters-serv';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [FullInfo,AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
  profileData$!:Observable<profileInt[]>;
  filterData!:Observable<profileInt[]>;
  selectedProfile!:profileInt;
  titleData$!:Observable<string>;
  companyData$!:Observable<string>;
  locationData$!:Observable<string>;
  profilenewId:number= 0;
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
 
}
