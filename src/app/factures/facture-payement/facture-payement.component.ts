import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';
import { ModePaiementEnum } from '@shared/service-proxies/service-proxies';
import { FormatService } from '@shared/services/format.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-facture-payement',
  templateUrl: './facture-payement.component.html',
  styleUrls: ['./facture-payement.component.css']
})
export class FacturePayementComponent implements OnInit {

  formGroup: FormGroup 
  payementOptions = [
    { value: ModePaiementEnum.Cheque, label: 'Chèque' },
    { value: ModePaiementEnum.Effet, label: 'Effet' },
    { value: ModePaiementEnum.Liquide, label: 'Liquide' },
    { value: ModePaiementEnum.Virement, label: 'Virement' },
  ]
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private _formBuider: FormBuilder,
    private _formatService: FormatService,
  )
   { }

  ngOnInit(): void {
    
    this.initiateForm();
    this.formGroup.get('reference').setValue(this.config.data.reference)
    
  }

  initiateForm(){
    return this.formGroup = this._formBuider.group({
      datePaiement: [this.config.data.datePaiement, Validators.required],
      montant: [this.config.data.montantPaye , Validators.required],
      modePaiement: [this.config.data.modePaiement],
      reference: ['']
    })
  }

  closeDialogAndGetValue(){
    if(this.formGroup.valid){
      
      this.ref.close(this.formGroup.value)
    }

  }
  closeDialog(){
     this.ref.close()
  }

}
