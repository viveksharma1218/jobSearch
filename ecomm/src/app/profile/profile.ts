import { Component } from '@angular/core';
import { ProfileServ } from './profile-serv';
import { OnInit } from '@angular/core';
import{profileInt} from './profileInter'

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
  profileData!:profileInt[];

  constructor(private ProfileServ:ProfileServ){
    
  }

  ngOnInit(): void {
      this.ProfileServ.getData().subscribe(
        (data)=>{this.profileData = data;
          console.log(data)
        }
      );
  }
  
}
