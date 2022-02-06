import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


interface DataOperationsType {
  action: 'add' | 'update' | 'remove';
  payload: any
}

@Injectable({
  providedIn: 'root'
})
export class LazyTableService {


private _dataOperationSubject = new Subject<DataOperationsType>()
set emitDataOperation(value: DataOperationsType){
  this._dataOperationSubject.next(value)
}
get dataOperation$(){
  return this._dataOperationSubject.asObservable()
}

private _rowSelectedSubject = new Subject<any>()
set emitRowSelected(value: any){
  this._rowSelectedSubject.next(value)
}
get rowSelected$(){
  return this._rowSelectedSubject.asObservable()
}

constructor() { 

}


}
