import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';
import { FactureServiceProxy, ModePaiementEnum } from '@shared/service-proxies/service-proxies';
import { FormatService } from '@shared/services/format.service';
import * as moment from 'moment';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-facture-payement',
  templateUrl: './facture-payement.component.html',
  styleUrls: ['./facture-payement.component.css']
})
export class FacturePayementComponent implements OnInit {

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private _formBuider: FormBuilder,
    private _formatService: FormatService,
    private _factureServiceProxy: FactureServiceProxy
  )
   { 



   }

   formGroup: FormGroup 
   payementOptions = [
     { value: ModePaiementEnum.Cheque, label: 'Chèque' },
     { value: ModePaiementEnum.Effet, label: 'Effet' },
     { value: ModePaiementEnum.Liquide, label: 'Liquide' },
     { value: ModePaiementEnum.Virement, label: 'Virement' },
   ]

   currency = 'MAD'

  ngOnInit(): void {
    
    this.initiateForm();
    this.currency = this.config.data.currency
  }

  initiateForm(){
    return this.formGroup = this._formBuider.group({
      id: [this.config.data.factureId, ],
      datePaiement: [moment().toDate(), Validators.required],
      montant: [0, Validators.required],
      modePaiement: [ModePaiementEnum.Cheque],
      reference: ['']
    })
  }

  closeDialogAndGetValue(){
    if(this.formGroup.valid){
      this.dateIsSelected && this.formGroup.get('datePaiement').setValue(moment(this.formGroup.get('datePaiement').value)
        .add(1, 'days').toDate())
      this.ref.close(this.formGroup.value)
    }
  }

  closeDialog(){
     this.ref.close()
  }

  dateIsSelected = false
  selectDate(){
    this.dateIsSelected = true
  }

  async updateAmountRest(event){

    let totalPayments = await this._factureServiceProxy
    .getRestOfAmount(this.config.data.factureId)
    .toPromise()

    this.config.data.restAmount = this.config.data.factureTtc - totalPayments

  }
}
