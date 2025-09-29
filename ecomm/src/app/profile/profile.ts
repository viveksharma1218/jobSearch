import { Component,Output,EventEmitter } from '@angular/core';
import { ProfileServ } from './profile-serv';
import { OnInit } from '@angular/core';
import{profileInt,Job} from './profileInter';
import { FullInfo } from './full-info/full-info';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [FullInfo,AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
  profileData$!:Observable<profileInt[]>;
  selectedProfile!:profileInt;

  profilenewId:number= 0;
  constructor(private ProfileServ:ProfileServ){
    //  this.ProfileServ.getData().subscribe(
    //     (data)=>{this.profileData$ = data;
    //       console.log(data)
    //     }
    //   );
  }

  ngOnInit(): void {
     this.profileData$ = this.ProfileServ.getData();
  }

  getProfile(profile:profileInt):void{
    console.log(profile);
    this.selectedProfile=profile;
    
  }
 
}
