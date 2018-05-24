import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // decorator
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
    console.log('Detail ngOnInit()');
    console.log(this.hero);
  }

  ngOnChanges() {
    console.log('Detail ngOnChanges()');
    console.log(this.hero);
  }

}
