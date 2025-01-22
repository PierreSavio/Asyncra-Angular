import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedHeaderService {
  private actionSource = new BehaviorSubject<string>('');
  currentAction = this.actionSource.asObservable();

  sendAnimation(animation: string) {
    this.actionSource.next(animation);
  }
}
