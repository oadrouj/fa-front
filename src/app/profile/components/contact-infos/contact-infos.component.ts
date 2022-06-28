import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInfosDto, CountryServiceAppServiceProxy, InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies';
import { ToastService } from '@shared/services/toast.service';
import { finalize, first } from 'rxjs/operators'

@Component({
  selector: 'app-contact-infos',
  templateUrl: './contact-infos.component.html',
  styleUrls: ['./contact-infos.component.scss'],
  providers: [ToastService],
})
export class ContactInfosComponent implements OnInit {
  formGroup: FormGroup;
  dto: ContactInfosDto;
  currentId: number;
  countries: string[];
  iconSpin = "";

  constructor(
    private _formBuider: FormBuilder,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private _toastService: ToastService,
    private _countryService: CountryServiceAppServiceProxy,
  ) { }

  ngOnInit() {
    this.formGroup = this.initiateForm()

    this._infosEntrepriseService.getContactInfos().subscribe(res => {
      this.fillForm(res)
      this.currentId = res.id
    })

    this.getAllCountries();
  }

  initiateForm(){
    return this._formBuider.group({
      addres: ['', Validators.required],
      country: ['', Validators.required],
      telephone: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  fillForm(dto: ContactInfosDto) {
    return this.formGroup.setValue({
      addres: dto.adresse || null,
      country: dto.pays || null,
      telephone: dto.telephone || null,
      city: dto.ville || null,
      postalCode: dto.codePostal || null,
      email: dto.adresseMail || null
    })
  } 

  getAllCountries(){
    this._countryService.getAllCountries().subscribe(res => {
      this.countries = res.items.map(x => x.paysName);
    })
  }

  save(){
    if(this.formGroup.valid){
      let contactInfosDto = new ContactInfosDto({
        id: this.currentId,
        adresse: this.formGroup.value.addres,
        pays: this.formGroup.value.country,
        telephone: this.formGroup.value.telephone,
        ville: this.formGroup.value.city,
        codePostal: this.formGroup.value.postalCode,
        adresseMail: this.formGroup.value.email
      });
      this.iconSpin="pi pi-spin pi-spinner";
      this._infosEntrepriseService.updateContactInfos(contactInfosDto)
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

}
