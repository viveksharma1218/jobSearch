import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-apply',
  imports: [JsonPipe,ReactiveFormsModule,FormsModule, MatFormFieldModule, MatInputModule,MatExpansionModule],
  templateUrl: './apply.html',
  styleUrl: './apply.css'
})
export class Apply implements OnInit {
  jobApplicationForm!: FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.jobApplicationForm = this.fb.group({
        firstName:[''],
        lastName:[''],
        email:[''],
        mobileNumber:[''],
        address:this.fb.group({
          addressLine1:[''],
          addressLine2:[''],
          city:[''],
          state:[''],
          zipCode:[''],
          country:[''],
        }),
        jobPreference:this.fb.group({
          desiredPosition:[''],
          experience:[''],
          employementType:['FullTime'],
          salaryExpectation:[''],
          startDate:[''],
          relocation:[''],
          remoteWork:['true'],
        }),
        education:this.fb.group({
          highestDegree:[''],
          institution:[''],
          fieldOfStudy:[''],
          graduationYear:[''],
          gpa:[''],
        }),
        workExperience:[''],
        skills:this.fb.group({
          technicalSkills:[''],
          programmingLanguage:[''],
          frameworks:[''],
          tools:[''],
          certification:[''],
        }),
        documents:[''],
      })
  }
  
}
