import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  channel = ['Evidence1.png','Indent.png'];
  angular: boolean = true;
  react: boolean = false;
  theForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.theForm = this.formBuilder.group({
      'jobTitle': new FormControl('', [Validators.required
      ]),

      'location': new FormControl([], [Validators.required

      ]),
      'email': new FormControl([], [Validators.required,Validators.email

      ]),
      'state': new FormControl('', [Validators.required
      ]),
      'quarter': new FormControl('', [Validators.required
      ]),
    })
  }

  ngOnInit(): void {
    
    
  }
  onClickRemove(item:any) {
    this.channel.forEach(element => {
      if (item == element) {
        const index = this.channel.indexOf(item);
        this.channel.splice(index, 1);
      }
    })
  }
  onAddNew(){
    this.channel.push('');
  }
  onAddEducation(){

  }
  onSkill(item:any){
    if(item == 'angular'){
      this.angular = !this.angular;
      this.react = !this.react
    }
    else{
      this.react = !this.react;
      this.angular = !this.angular;

    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.theForm.controls;
  }
  onSubmit(){
    this.submitted = true;

    if (this.theForm.invalid) {
      return;
    }
    
  }

}
