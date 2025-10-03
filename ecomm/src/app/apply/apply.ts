import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
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
        firstName:['',[Validators.required]],
        lastName:['',[Validators.max(5)]],
        email:['',[Validators.email]],
        mobileNumber:[''],
        address:this.fb.group({
          addressLine1:[''],
          addressLine2:[''],
          city:[''],
          state:[''],
          zipCode:['',[Validators.max(6)]],
          country:[{value:'India', disabled:true,}],
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
        tnc:['',[Validators.required]],
      })
  }
  applyJob(){
    //console.log(this.jobApplicationForm.value);
    // .value can not access disabled value. For example here we want <input> related country to have value India and we disable
    // it so user can not input other coutry name. the getRawValue method can access country input also.
    console.log(this.jobApplicationForm.getRawValue())
  }
  
}
