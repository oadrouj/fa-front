import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministrativeInfosDto, InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-administrative-infos',
  templateUrl: './administrative-infos.component.html',
  styleUrls: ['./administrative-infos.component.scss'],
  providers: [ToastService],
})
export class AdministrativeInfosComponent implements OnInit {

  formGroup: FormGroup;
  legalStatusOptions = ['Professionnel particulier', 'Auto entrepreneur', 'SARL', 'SA']
  currentId: number;

  // {label: 'Profetionnel particulier', value: 'pp'},
    // {label: 'Auto entrepreneur', value: 'ae'},
    // {label: 'SARL', value:'sarl'},
    // {label: 'SA', value:'sa'},

  constructor(
    private _formBuider: FormBuilder, 
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private _toastService: ToastService,
  ) { }

  ngOnInit() {
    this.formGroup = this.initiateForm()

    this._infosEntrepriseService.getAdministrativeInfos().subscribe(res => {
      this.fillForm(res)
      this.currentId = res.id
    })
  }

  initiateForm(){
    return this._formBuider.group({
      legalStatus: ['', Validators.required],
      if: [''],
      ice: [''],
      tp: [''],
    })
  }

  fillForm(dto: AdministrativeInfosDto){
    this.formGroup.setValue({
      legalStatus: dto.statutJuridique,
      if: dto.if,
      ice: dto.ice,
      tp: dto.tp
    })
  }
  
  save(){
    if(this.formGroup.valid){
      let administrativeInfosDto = new AdministrativeInfosDto({
        id: this.currentId,
        statutJuridique: this.formGroup.value.legalStatus,
        if: this.formGroup.value.if,
        ice: this.formGroup.value.ice,
        tp: this.formGroup.value.tp

      })
      this._infosEntrepriseService.updateAdministrativeInfos(administrativeInfosDto).subscribe(res => {
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
}
