import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

constructor() { }
// const Prefex
getReferenceFromReferenceNumber(referenceNumber: number){
  let reference = referenceNumber + "";
  while (reference.length < 5) reference = "0" + reference;
  return referenceNumber == undefined || referenceNumber == 0 ? "..." : "C" + reference;

}

}
