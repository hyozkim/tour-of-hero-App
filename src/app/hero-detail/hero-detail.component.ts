import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // decorator
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  ngOnInit() {
    console.log('[hero-detail] ngOnInit()');

    this.getHero();
  }

  ngOnDestroy() {
    console.log('[hero-detail] ngOnDestroy()');
  }


  ngOnChanges() {
    // console.log('Detail ngOnChanges()');
    // console.log(this.hero);
  }



  getHero(): void {
    // stirng -> number 로 변환하기 위해서 Number() 함수 사용
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(res => this.hero = res );

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack() );
  }

}
