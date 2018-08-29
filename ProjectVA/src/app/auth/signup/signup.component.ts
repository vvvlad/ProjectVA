import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxBirthDate;

  constructor() { }

  ngOnInit() {
    this.maxBirthDate = new Date();
    this.maxBirthDate.setFullYear(this.maxBirthDate.getFullYear() - 18);

  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
