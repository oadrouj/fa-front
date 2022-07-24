import { Component, Input, OnInit } from '@angular/core';
import { FactureDto, FactureServiceProxy, FactureStatutEnum } from '@shared/service-proxies/service-proxies';
import { FormatService } from '@shared/services/format.service';
import { ToastService } from '@shared/services/toast.service';
import * as moment from 'moment';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  
  constructor(
    private _factureServiceProxy: FactureServiceProxy,
    private _formatService: FormatService,
    private _toastService: ToastService
  ) { }


  @Input() currency = 'MAD'
  @Input() factureId: number;
  paymentHistoryItems: any
  totalRecords

  rows = 4;
  first = 0
  ngOnInit() { 

  }

  loadPaymentHistoryItemsLazy(event){
    !event.first && (event.fisrt = 0)
    !event.rows && (event.rows = 4)
    this._factureServiceProxy.getByFactureIdFactureInfosPaiement(this.factureId, event.first, event.rows).subscribe(res => {
      this.paymentHistoryItems = [...res.items]
      this.totalRecords = res.totalEntityItems

    })
  }

  formatPaymentMethod(paymentMethod){
    return this._formatService.formatPaymentMethod(paymentMethod)
  }
 
  deletePayement(facturePayement){
    console.log(facturePayement);

    this._factureServiceProxy.deleteFactureInfosPaiement(facturePayement.id)
    .subscribe(res => {
      this._toastService.success({
        summary: 'Opération réussie',
        detail: 'Réglement supprimé avec succés',
      })
      this._factureServiceProxy.getByFactureIdFactureInfosPaiement(facturePayement.factureId, this.first, this.rows)
      .subscribe( res2=>{
        this.paymentHistoryItems = res2.items
        if (this.paymentHistoryItems.length == 0){
          this._factureServiceProxy
          .changeFactureStatut(
            facturePayement.factureId,
            FactureStatutEnum.PaiementAttente,
          )
          .subscribe({
            next: (res3) => {
              this._toastService.success({
                summary: 'Aucun réglement saisi',
                detail: 'La facture est désormais en attente de paiement',
              })
          },
          error: err =>{
            console.log(err);
          }
        })

      }
      })

    })
  }
}
