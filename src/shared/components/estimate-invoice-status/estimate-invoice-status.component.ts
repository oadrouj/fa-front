import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DevisStatutEnum, FactureStatutEnum } from '@shared/service-proxies/service-proxies';
import { EstimateInvoiceStatusStateService } from '@shared/services/estimate-invoice-status-state.service';
import { FormatService } from '@shared/services/format.service';

@Component({
  selector: 'app-estimate-invoice-status',
  templateUrl: './estimate-invoice-status.component.html',
  styleUrls: ['./estimate-invoice-status.component.css']
})
export class EstimateInvoiceStatusComponent implements OnInit {

  constructor(
    public formatStatut: FormatService,
    private _estimateInvoiceStatusStateService: EstimateInvoiceStatusStateService,
    private _router: ActivatedRoute
  ) { }

  @Input() currentComponent: 'Estimate' | 'Invoice'
  @Input() status: DevisStatutEnum | FactureStatutEnum 
  ngOnInit() {
    this.currentComponent = this._router.snapshot.data.currentComponent
  }

  devisStatusItems = [
    {
      actualStatus: DevisStatutEnum.Valide,
      label: 'Convertir',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Convert',target: 'Estimate'}
      },
    },
    {
      actualStatus: DevisStatutEnum.Valide,
      label: 'Rejeter',
      icon: 'pi pi-times',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Reject',target: 'Estimate'}
      },
    },
    {
      actualStatus: DevisStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Validate',target: 'Estimate'}
      },
    },
  ]

  factureStatusItems = [
    {
      actualStatus: FactureStatutEnum.ReglePartiellemt,
      label: 'Ajouter un paiement',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'PartiallySettle',target: 'Invoice'}
      },
    },
    {
      actualStatus: FactureStatutEnum.PaiementAttente,
      label: 'Régler',
      icon: 'pi pi-check',
      command: async () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Settle',target: 'Invoice'}
      },
    },

    {
      actualStatus: FactureStatutEnum.Cree,
      label: 'Valider',
      icon: 'pi pi-check',
      command: () => {
        this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'Validate',target: 'Invoice'}
      },
    },
  ]


  getStatusOptions() {
    let actualStatus = this.status
    if(this.currentComponent == 'Estimate')
      return this.devisStatusItems.filter((item) => item.actualStatus == actualStatus)
    else 
      return this.factureStatusItems.filter((item) => item.actualStatus == actualStatus)
  }


  addPayement(){
    this._estimateInvoiceStatusStateService.statusModifier = {statusAction: 'PartiallySettle',target: 'Invoice'}
  }
}
