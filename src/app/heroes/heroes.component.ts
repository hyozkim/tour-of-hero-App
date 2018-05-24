import {Component, OnDestroy, OnInit} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  // hero: Hero = {id: 1, name: 'winstorm'};
  // heroes: Hero[] = HEROES;
  // heroes = HEROES; // 와 같음
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log(heroService);
    console.log('contructor Call');
  }

  ngOnInit() {
    console.log('ngOnInit() Method Call');
    this.getHeroes();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() Method Call');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // subscribe 변화를 감지한다.
    // 람다식 Callback 함수
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes );
  }
}
