import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Employee} from './employee.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {

  languages = [];
  hasPrimaryLanguageError: boolean = false;
  // startDate: Date = new Date();
  // minDate: Date = new Date('Oct 10 2016');
  // startTime: Date = new Date('Oct 1 2016 9:00 AM');
  // onOffSwitch: string = 'Off';
  // familiarityLevel: number = 1;
  // skillRating: number = 5;

  /**
   * Test Data
   */
  model = new Employee('Darla', 'Smith', true, 'w2', 'English');

  constructor() {}

  ngOnInit() {
    // this.contactForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, CustomValidators.validateEmail]],
    //   content: ['', [Validators.required, Validators.minLength(10)]]
    // });
  }

  submitForm(form: NgForm) {
    // Validate form data
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) {
      return;
    }

    // console.log(this.model);
    // console.log(form.value);
    // this.formPoster.postEmployeeForm(this.model)
    //   .subscribe(
    //     data => console.log(`Success: `, data),
    //     err => console.log(`Error: err`, err)
    //   );
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }

  ratingHover(value) {
    console.log(`hover: ${value}`);
  }

  ratingLeave(value) {
    console.log(`leave: ${value}`);
  }
}
