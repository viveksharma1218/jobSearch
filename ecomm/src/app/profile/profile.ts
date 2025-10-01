import { Component,OnInit } from '@angular/core';
import { ProfileServ } from './profile-serv';
import{profileInt,Job} from './profileInter';
import { FullInfo } from './full-info/full-info';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import{HeaderfiltersServ} from '../services/headerfilters-serv';

@Component({
  selector: 'app-profile',
  imports: [FullInfo,AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
  profileData$!:Observable<profileInt[]>;
  filterData:profileInt[] = [];
  selectedProfile!:profileInt;
  titleData!:string;
  companyData!:string;
  locationData!:string;
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
     this.headerser.currentTD.subscribe(
      (data) => {this.titleData = data;
        console.log(data);
      }
     );
     this.headerser.currentCD.subscribe(
      (data)=>{this.companyData = data;
        console.log(data);
      }
     );
     this.headerser.currentLD.subscribe(
      (data)=> {this.locationData = data;
        console.log(data);
      }
     );
     this.getFilterData();
  }

  getProfile(profile:profileInt):void{
    console.log(profile);
    this.selectedProfile=profile;
    
  }
  getFilterData(){
   
  }
 
}
