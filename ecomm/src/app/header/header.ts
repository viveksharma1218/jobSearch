import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import{HeaderfiltersServ} from '../services/headerfilters-serv'
import { HeaderCategoryServ } from './header-category-serv';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  allTitles :string[]= [];
  allCompanies:string[] = [];
  allLocations:string[] = [];
  title!:string;
  company!:string;
  location!:string;
  FiltersGroup = new FormGroup({
    selectedTitle: new FormControl(''),
    selectedCompany:new FormControl(''),
    selectedLocation:new FormControl(''),
  });
  constructor(private HeaderServ:HeaderfiltersServ,private hcs:HeaderCategoryServ){ }

  ngOnInit(): void {
      this.FiltersGroup.get<string>('selectedTitle')?.valueChanges.subscribe(
        (value) => {this.title = value;
          //console.log(this.title)
          this.HeaderServ.changeData(value);
        }
      )
      this.FiltersGroup.get<string>('selectedCompany')?.valueChanges.subscribe(
        (value)=>{this.company = value;
          //console.log(this.company);
          this.HeaderServ.changeCompanyData(value);
        }
      )
      this.FiltersGroup.get<string>('selectedLocation')?.valueChanges.subscribe(
        (value)=>{this.location = value;
          //console.log(this.location);
          this.HeaderServ.changeLocationData(value);
        }
      )
      this.allCompanies = this.hcs.companies;
      this.allTitles = this.hcs.jobTitles;
      this.allLocations = this.hcs.locations;
      //console.log(this.allCompanies, this.allLocations, this.allTitles)
  }
}
