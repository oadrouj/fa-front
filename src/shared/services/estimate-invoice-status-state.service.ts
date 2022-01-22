import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type StatusAction = 'Convert' | 'Reject' | 'Validate' | 'Settle' | 'PartiallySettle' | 'Historic'
type TargetComponent = 'Estimate' | 'Invoice'
 type StatusState = {statusAction: StatusAction, target: TargetComponent}

@Injectable({
  providedIn: 'root'
})
export class EstimateInvoiceStatusStateService {

constructor() { }


  private statusSubject = new BehaviorSubject<StatusState>({statusAction: null, target: null})

  get statusModifier$(){
    return this.statusSubject.asObservable()
  }

  set statusModifier(nextState:StatusState ){
    this.statusSubject.next(nextState)
  }

  
}
