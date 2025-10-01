import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import{HeaderfiltersServ} from '../services/headerfilters-serv'

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  title!:string;
  company!:string;
  location!:string;
  FiltersGroup = new FormGroup({
    selectedTitle: new FormControl('All profiles',),
    selectedCompany:new FormControl('All Companies'),
    selectedLocation:new FormControl('All Locations'),
  });
  constructor(private HeaderServ:HeaderfiltersServ){ }

  ngOnInit(): void {
      this.FiltersGroup.get<string>('selectedTitle')?.valueChanges.subscribe(
        (value) => {this.title = value;console.log(this.title)
          this.HeaderServ.changeData(value);
        }
      )
      this.FiltersGroup.get<string>('selectedCompany')?.valueChanges.subscribe(
        (value)=>{this.company = value;console.log(this.company);
          this.HeaderServ.changeData(value);
        }
      )
      this.FiltersGroup.get<string>('selectedLocation')?.valueChanges.subscribe(
        (value)=>{this.location = value;console.log(this.location);
          this.HeaderServ.changeData(value);
        }
      )
      console.log();
  }
}
