import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedHeaderService {
  private actionSource = new BehaviorSubject<string>('');
  private messageSource = new BehaviorSubject<string>('');
  
  currentAction = this.actionSource.asObservable();
  currentMessage = this.messageSource.asObservable();

  sendAnimation(animation: string) {
    localStorage.removeItem('token');
    this.actionSource.next(animation);
  }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
