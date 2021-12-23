import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeProfileContainerTitleService {

constructor() { 
}

private changeTitleSubject = new Subject<string>()
changeTitle$ = this.changeTitleSubject.asObservable()

public changeTitleEvent(newTitle){
  this.changeTitleSubject.next(newTitle)
}

}
