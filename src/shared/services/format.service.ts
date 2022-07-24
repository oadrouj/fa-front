import { Injectable } from '@angular/core'
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum'
import {
  DevisStatutEnum,
  FactureStatutEnum,
  ModePaiementEnum,
} from '@shared/service-proxies/service-proxies'

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  constructor() {}
  // const Prefex
  formatReferenceNumber(number: number, prefix?: ReferencePrefix | string) {
    let reference = number + ''
    while (reference.length < 5) reference = '0' + reference
    return number == undefined || number == 0 ? '...' : prefix + reference
  }

  formatDevisStatut(statut?: DevisStatutEnum) {
    switch (statut) {
      case DevisStatutEnum.Cree:
        return 'Brouillon'
      case DevisStatutEnum.Valide:
        return 'Validé'
      case DevisStatutEnum.Converti:
        return 'Convérti'
      case DevisStatutEnum.Rejete:
        return 'Rejeté'
      case DevisStatutEnum.Expire:
        return 'Expiré'
      case DevisStatutEnum.Undefined:
        return ''
    }
  }

  formatFactureStatut(statut?: FactureStatutEnum) {
    switch (statut) {
      case FactureStatutEnum.Cree:
        return 'Brouillon'
      case FactureStatutEnum.Valide:
        return 'Validée'
      case FactureStatutEnum.Regle:
        return 'Réglée'
      case FactureStatutEnum.ReglePartiellemt:
        return 'Réglée Partiellement'
      case FactureStatutEnum.PaiementAttente:
        return 'En attente'
      case FactureStatutEnum.PaiementRetard:
        return 'En retard'
      default:
        return ''
    }
  }

  formatPaymentMethod(paymentMethod: ModePaiementEnum) {
    switch (paymentMethod) {
      case ModePaiementEnum.Cheque:
        return 'Chèque'
      case ModePaiementEnum.Effet:
        return 'Effet'
      case ModePaiementEnum.Liquide:
        return 'Liquide'
      case ModePaiementEnum.Virement:
        return 'Virement'
     
    }
  }
}
