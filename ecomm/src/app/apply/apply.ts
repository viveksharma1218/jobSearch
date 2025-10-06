import { Component,OnInit ,inject} from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  imports: [ReactiveFormsModule,
            FormsModule, 
            MatFormFieldModule, 
            MatInputModule,
            MatExpansionModule,
            RouterLink],
  templateUrl: './apply.html',
  styleUrl: './apply.css'
})
export class Apply implements OnInit {
  jobApplicationForm!: FormGroup;
  router = inject(Router);
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.jobApplicationForm = this.fb.group({
        firstName:['',[Validators.required]],
        lastName:['',[Validators.maxLength(5)]],
        email:['',[Validators.required,Validators.email]],
        // be default form values are updated on every key press but after using blur the form control values 
        // will be updated when we move out of the form Control.
        mobileNumber:['',{
          updateOn:'blur',
          validators:[Validators.required,Validators.pattern(/^\d{10}$/)]}],
        address:this.fb.group({
          addressLine1:['',[Validators.required]],
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
    window.alert('form Applied Successfully');
    this.router.navigate(['/profile'])

  }
  resetForm(){
    this.jobApplicationForm.reset({
      firstName:'',
        lastName:'',
        email:'',
        mobileNumber:'',
        address:this.fb.group({
          addressLine1:'',
          addressLine2:'',
          city:'',
          state:'',
          zipCode:'',
          country:'',
        }),
        jobPreference:this.fb.group({
          desiredPosition:'',
          experience:'',
          employementType:'',
          salaryExpectation:'',
          startDate:'',
          relocation:'',
          remoteWork:'',
        }),
        education:this.fb.group({
          highestDegree:'',
          institution:'',
          fieldOfStudy:'',
          graduationYear:'',
          gpa:'',
        }),
        workExperience:'',
        skills:this.fb.group({
          technicalSkills:'',
          programmingLanguage:'',
          frameworks:'',
          tools:'',
          certification:'',
        }),
        documents:'',
        tnc:'',
    })
  }
  
}
