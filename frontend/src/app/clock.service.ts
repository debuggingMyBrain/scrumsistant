import { Injectable } from '@angular/core';
import {timer, interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  getTimer(timeInSeconds, tickInterval, funcOnTick, funcOnComplete){
    let timer$ = timer((timeInSeconds + 1) * 1000)
    let tickSource$ = interval(tickInterval)
    tickSource$.pipe(takeUntil(timer$)).subscribe(
      tick => funcOnTick(tick),
      () => {},
      () => funcOnComplete(),
     )
  }
}
