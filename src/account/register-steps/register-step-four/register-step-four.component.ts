import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateInfosEntrepriseInput, InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies';
import csc, { ICity, ICountry } from 'country-state-city';

@Component({
  selector: 'app-register-step-four',
  templateUrl: './register-step-four.component.html',
  styleUrls: ['./register-step-four.component.css']
})
export class RegisterStepFourComponent implements OnInit {

  @Input()
  code: number;

  @Input()
  status: string;

  model: CreateInfosEntrepriseInput = new CreateInfosEntrepriseInput();

  nomParticulier: boolean;
  nomEntreuprise: boolean;
  countries: ICountry[];
  cities: ICity[];
  pays: string;

  nameRequired: boolean = false;
  raisonSocialeRequired: boolean = false;

  constructor(private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private _router: Router) { }

  ngOnInit(): void { 
    this.model.userId = this.code;
    this.nomEntreuprise = this.status.startsWith('s');
    this.nomParticulier = !this.status.startsWith('s');

    this.countries = csc.getAllCountries();
    this.pays = 'MA';

    this.countrySelected();
  }

  countrySelected(): void {
    this.cities = csc.getCitiesOfCountry(this.pays);
    this.model.pays = csc.getCountryByCode(this.pays).name;
    this.model.ville = this.cities[0].name;
  }

  validatePrenom(): boolean {
    // var name = this.model.name;
    // this.nameRequired = !(name != undefined && name.trim().length > 0);
    // if (this.nameRequired) return false;
    return true;
  }

  validateRaisonSociale(): boolean {
    var raisonSociale = this.model.raisonSociale;
    this.raisonSocialeRequired = !(raisonSociale != undefined && raisonSociale.trim().length > 0);
    if (this.raisonSocialeRequired) return false;
    return true;
  }

  save() {
    if(this.validateRaisonSociale()) {
      this.model.statutJuridique = this.status
      this._infosEntrepriseService.createInfosEntreprise(this.model).subscribe(() => {
        this._router.navigate(['/account/redirect'], { state: { route: '/account/reister', step: '5', userId: this.code} });
      });
    }
  }

  retour(): void {
    this._router.navigate(['/account/redirect'], { state: { route: '/account/reister', step: '3', userId: this.code } });
  }
}
