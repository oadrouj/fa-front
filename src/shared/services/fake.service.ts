import { Injectable } from '@angular/core';
import { DevisStatutEnum } from '@shared/service-proxies/service-proxies';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  data = [
    {
      id: 4,
      reference: 4,
      client: {
        id: 1,
        reference: 1,
        nom: 'Omar Attioui',
        raisonSociale: 'Facturi',
        adresse: '12 rue de Casablanca',
        ville: 'Casablanca',
        codePostal: '2000',
        telPortable: '0669999999',
        pays: 'Maroc'
      },
      date_emission: new Date('10/09/2021'),
      echeance: 15,
      statut: DevisStatutEnum.Cree,
      introduction: 'introduction here',
      pied_page: 'pied page here',
      remise: 200,
      montant_ttc : 0,
      contentItems: [
        {
          description: null,
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ht: 0,
          total_ttc: 0,
        },
        // {
        //   description: 'Consultation2',
        //   date: new Date('01/01/2021'),
        //   quantite: 8,
        //   unite: 'Heures',
        //   pu: 100.0,
        //   tva: 20,
        //   total_ht: 0,
        //   total_ttc: 0,
        // },
      ],
    },

    {
      id: 5,
      reference: 2,
      client: {
        id: 1,
        reference: 1,
        nom: 'Omar Attioui',
        raisonSociale: 'Facturi',
        adresse: '12 rue',
        ville: 'Casablanca',
        codePostal: '2000',
        telPortable: '0669999999',
        pays: 'Maroc'
      },
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: DevisStatutEnum.Cree,
      introduction: 'introduction here',
      pied_page: 'pied page here',
      remise: 0,
      montant_ttc: 0,
      contentItems: [
        {
          description: 'Consultation 2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ht: 0,
          total_ttc: 0,
        },
      ],
    },

    {
      id: 8,
      reference: 3,
      client: {
        id: 1,
        reference: 1,
        nom: 'Omar Attioui',
        raisonSociale: 'Facturi',
        adresse: '12 rue',
        ville: 'Casablanca',
        codePostal: '2000',
        telPortable: '0669999999',
        pays: 'Maroc'
      },
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: DevisStatutEnum.Valide,
      introduction: 'introduction here',
      pied_page: 'pied page here',
      remise: 0,
      montant_ttc: 0,
      contentItems: [
        {
          description: 'Consultation 2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ht: 0,
          total_ttc: 0,
        },
       ],
    },

    {
      id: 7,
      reference: 5,
      client: {
        id: 1,
        reference: 1,
        nom: 'Omar Attioui',
        raisonSociale: 'Facturi',
        adresse: '12 rue',
        ville: 'Casablanca',
        codePostal: '2000',
        telPortable: '0669999999',
        pays: 'Maroc'
      },
      date_emission: new Date('01/01/2021'),
      echeance: 15,
      statut: DevisStatutEnum.Valide,
      introduction: 'introduction here',
      pied_page: 'pied page here',
      remise: 0,
      montant_ttc: 0,
      contentItems: [
        {
          description: 'Consultation 2',
          date: new Date('01/01/2021'),
          quantite: 8,
          unite: 'Heures',
          pu: 100.0,
          tva: 20,
          total_ht: 0,
          total_ttc: 0,
        },
        
      ],
    },
  ]

  constructor() { }

  getData(){
    return of(this.data);
  }
}
