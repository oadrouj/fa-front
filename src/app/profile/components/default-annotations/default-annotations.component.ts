import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DefaultAnnotationsDto, InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies';
import { ChangeProfileContainerTitleService } from '@shared/services/change-profile-container-title.service';
import { ToastService } from '@shared/services/toast.service';
import { finalize, first } from 'rxjs/operators'

@Component({
  selector: 'app-default-annotations',
  templateUrl: './default-annotations.component.html',
  styleUrls: ['./default-annotations.component.scss'],
  providers: [ToastService],
})
export class DefaultAnnotationsComponent implements OnInit {
  dto: DefaultAnnotationsDto;
  iconSpin = "";
 
  constructor(
    private _formBuider: FormBuilder,
    private _changeProfileContainerTitleService: ChangeProfileContainerTitleService,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private _toastService: ToastService,
  ) { }

  formGroup: FormGroup;
  selectedTitle
  annotationOptions = ['Devis', 'Factures']
  ngOnInit() {
    this.formGroup = this.initiateForm()

    this._infosEntrepriseService.getDefaultAnnotations().subscribe(res => {
      this.dto = res
      this.fillForm(res)
    })
  } 

  initiateForm(){
    return this._formBuider.group({
      selectedType: ['Devis'],
      estimateIntroMessage: [''],
      estimateFooter: [''],
      invoiceIntroMessage: [''],
      invoiceFooter: [''],
    })
  }

  fillForm(defaultAnnotationsDto: DefaultAnnotationsDto){
    this.formGroup.patchValue({
      estimateIntroMessage: defaultAnnotationsDto.estimateIntroMessage,
      estimateFooter: defaultAnnotationsDto.estimateFooter,
      invoiceIntroMessage: defaultAnnotationsDto.invoiceIntroMessage,
      invoiceFooter: defaultAnnotationsDto.invoiceFooter,
    })
  }

  save(){
    if(this.formGroup.valid){
      let defaultAnnotationsDto
        defaultAnnotationsDto = new DefaultAnnotationsDto({
          ...this.dto,
          estimateIntroMessage: this.formGroup.value.estimateIntroMessage,
          estimateFooter: this.formGroup.value.estimateFooter,
          invoiceIntroMessage: this.formGroup.value.invoiceIntroMessage,
          invoiceFooter: this.formGroup.value.invoiceFooter
        })

        this.iconSpin="pi pi-spin pi-spinner";

      this._infosEntrepriseService.updateDefaultAnnotations(defaultAnnotationsDto)
      .pipe(first(),finalize(() => {this.iconSpin=""; }))
      
      .subscribe(res => {
        if (res) {
          this._toastService.success({
            detail: 'Les informations générales sont modifiées',
          })
        } else {
          this._toastService.error({
            detail: 'Une erreur s\'est produite lors de la modification',
          })
        }
      })
    }
    else{
      this._toastService.error({
        detail: 'Veuillez remplir tous les chemps',
      })
    }
   
  }

  changeProfileContainerTitle(){

    this._changeProfileContainerTitleService.changeTitleEvent(this.formGroup.get('selectedType').value)
  }

}
