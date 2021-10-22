import { Injectable, OnInit } from '@angular/core'
import * as moment from 'moment'
import { BehaviorSubject, Subject } from 'rxjs'
import {
  ClientServiceProxy,
  CreateFactureInput,
  DevisServiceProxy,
  FactureItemDto,
  FactureServiceProxy,
  FactureStatutEnum,
} from '../service-proxies/service-proxies'
import { DateHelper } from '../helpers/DateHelper'
import { FactureContentItem } from '../models/FactureContentItem'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConvertDevisToFactureService {
  constructor(
    private _factureServiceProxy: FactureServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _devisServiceProxy: DevisServiceProxy,
    private _router: Router,
  ) {}


  behaviorSubject = new BehaviorSubject<any>(null)
  observable = this.behaviorSubject.asObservable()

  emitEvent(value){
    this._router.navigate(['/app/Factures']).then(res => {
      if(res){
        this.behaviorSubject.next({
          ...value,
          factureItems: value.devisItems,
          client: {id: value.client.id, nom: value.client.nom},
          dateEmission: value.dateEmission.toDate(),
          isConverted: true
        })
      }
    })
    
  }
  
  // this.updateApiCall(
  //   this.selectedDevisItem.id,
  //   DevisStatutEnum.Converti,
  //   'Le devis est converti en facture',
  // )
  // updateApiCall(devisId: number) {
  //   this._devisServiceProxy
  //     .changeDevisStatut(devisId, devisStatut)
  //     .subscribe((res) => {
  //       if (res) { 
  //         this._toastService.info({ detail })
  //         this.selectedDevisItem = {
  //           ...this.selectedDevisItem,
  //           statut: devisStatut,
  //         }
  //         this.tableChild.tableData.forEach((item) => {
  //           item.id == this.selectedDevisItem.id && (item.statut = devisStatut)
  //         })
  //       }
  //       //Update list
  //     })
  // }
}