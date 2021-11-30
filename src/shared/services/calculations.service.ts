import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

constructor() { }

calculateTTC(htPrice: number, tva: number) {
  return +htPrice + (htPrice * tva / 100)
}

calculateTTCWithQuantity(htPrice: number, tva: number, quantity: number) {
  let htTotal = +htPrice * quantity 
  return htTotal + (htTotal * tva / 100) 
}

}
