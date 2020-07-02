import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Subject, Observable } from 'rxjs';

import { hero } from '../../../../protos/types'

@Controller()
export class AppController {

  private heroesList: Array<hero.IHero> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  constructor(private readonly appService: AppService) { }

  @GrpcMethod('HeroesService')
  getAll(data: hero.IHeroesListGet): { data: Array<hero.IHero> } {
    return { data: this.heroesList };
  }

  @GrpcMethod('HeroesService')
  findOne(data: hero.IHeroById): hero.IHero {
    return this.heroesList.find(({ id }) => id === data.id);
  }

  @GrpcStreamMethod('HeroesService')
  getAllStream(message: Observable<hero.IHeroesListGet>): Observable<{ data: Array<hero.IHero> }> {
    const subject = new Subject<{ data: Array<hero.IHero> }>();
    const onNext = data => {
      subject.next({
        data: this.heroesList
      })
    }
    const onComplete = () => subject.complete();
    message.subscribe(onNext, null, onComplete);
    return subject.asObservable();
  }

  @GrpcStreamMethod('HeroesService')
  findOneStream(message: Observable<hero.IHeroById>): Observable<hero.IHero> {
    const subject = new Subject<hero.IHero>();
    const onNext = data => {
      subject.next(this.heroesList.find(({ id }) => id === data.id))
    }
    const onComplete = () => subject.complete();
    message.subscribe(onNext, null, onComplete);
    return subject.asObservable();
  }

}
