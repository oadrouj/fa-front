import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';
import { ReferenceService } from '@shared/services/reference.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-facture-payement',
  templateUrl: './facture-payement.component.html',
  styleUrls: ['./facture-payement.component.css']
})
export class FacturePayementComponent implements OnInit {

  formGroup: FormGroup 
  payementOptions = ["Carte bancaire", "Espèces", "chèque"]
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private _formBuider: FormBuilder,
    private _referenceService: ReferenceService,
  )
   { }

  ngOnInit(): void {
    this.initiateForm();
    this.formGroup.get('reference').setValue(this._referenceService.formatReferenceNumber(
      this.config.data.reference,
      ReferencePrefix.Facture
    ))
    
  }

  initiateForm(){
    return this.formGroup = this._formBuider.group({
      datePaiement: [new Date(), Validators.required],
      montant: [0, Validators.required],
      modePaiement: [''],
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
