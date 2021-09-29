import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalEventsService {

    private pageChangedColorSubject = new BehaviorSubject<string>("#2A95D1");

    pageChangedColorSubjectObservable = this.pageChangedColorSubject.asObservable();

    announcedThePageChangedColorSubject(color: string) {
        this.pageChangedColorSubject.next(color);
    }
}