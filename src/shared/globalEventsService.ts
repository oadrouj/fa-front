import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class GlobalEventsService {

    // Change the header color dynamically
    private pageChangedColorSubject = new BehaviorSubject<string>("#2A95D1");

    pageChangedColorSubjectObservable = this.pageChangedColorSubject.asObservable();

    announcedThePageChangedColorSubject(color: string) {
        this.pageChangedColorSubject.next(color);
    }

    // Emit validate devis update to devis-dialog component
    validateDevisSubject = new BehaviorSubject<ModificationStatusEnum>(ModificationStatusEnum.No_Modification)

    validateDevis$ = this.validateDevisSubject.asObservable();

    emitValidateDevisEvent(value: ModificationStatusEnum){
      this.validateDevisSubject.next(value)
    }
}

export enum ModificationStatusEnum {
  No_Modification,
  Begin_Modification,
  Done_Modification
}