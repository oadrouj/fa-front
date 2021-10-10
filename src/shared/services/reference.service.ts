import { Injectable } from '@angular/core';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

constructor() { }
// const Prefex
formatReferenceNumber(prefix: ReferencePrefix, number: number){
  let reference = number + "";
  while (reference.length < 5) reference = "0" + reference;
  return number == undefined || number == 0 ? "..." : prefix + reference;

}

}