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
    console.log('[heroes] ngOnInit() Method Call');
    this.getHeroes();
  }

  ngOnDestroy() {
    console.log('[heroes] ngOnDestroy() Method Call');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // add함수
  add(name: String): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // delete함수
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getHeroes(): void {
    // subscribe 변화를 감지한다.
    // 람다식 Callback 함수  ( => function 으로 생각하자 )
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes );
  }
}
