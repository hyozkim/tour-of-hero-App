import {Component, OnDestroy, OnInit} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  // hero: Hero = {id: 1, name: 'winstorm'};
  heroes: Hero[] = HEROES;
  // heroes = HEROES; // 와 같음

  selectedHero;

  constructor() {
    console.log('contructor Call');
  }

  ngOnInit() {
    console.log('ngOnInit() Method Call');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() Method Call');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
