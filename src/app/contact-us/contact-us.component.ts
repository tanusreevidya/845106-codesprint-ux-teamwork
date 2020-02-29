import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactus : FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.contactus=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneno:['',Validators.required],
      queries:['',Validators.required],
    });
  }
  contact(){
    console.log(this.contactus.value);
  }
}