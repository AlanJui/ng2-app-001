import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    this.submitted = true;
    console.log(`Submit is pressed`);
  }

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

}