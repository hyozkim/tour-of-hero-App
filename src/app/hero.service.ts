import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Observable 로 객체를 감싼다. (관찰자)
  getHeroes(): Observable<Hero[]> {
    // message log 메시지 추가
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
