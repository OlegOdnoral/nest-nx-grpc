import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Subject, Observable } from 'rxjs';

interface HeroById {
  id: number;
}

interface Hero {
  id: number,
  name: string
}

@Controller()
export class AppController {

  private heroesList: Array<Hero> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  constructor(private readonly appService: AppService) { }

  @GrpcMethod('HeroesService')
  getAll(data: undefined, metadata: unknown): { data: Array<Hero> } {
    return { data: this.heroesList };
  }

  @GrpcMethod('HeroesService')
  findOne(data: HeroById, metadata: unknown): Hero {
    return this.heroesList.find(({ id }) => id === data.id);
  }

  @GrpcStreamMethod('HeroesService')
  getAllStream(message: Observable<undefined>, metadata: unknown): Observable<{ data: Array<Hero> }> {
    const subject = new Subject<{ data: Array<Hero> }>();
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
  findOneStream(message: Observable<HeroById>, metadata: unknown): Observable<Hero> {
    const subject = new Subject<Hero>();
    const onNext = data => {
      subject.next(this.heroesList.find(({ id }) => id === data.id))
    }

    const onComplete = () => subject.complete();
    message.subscribe(onNext, null, onComplete);

    return subject.asObservable();
  }

}
