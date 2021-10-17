import { DevisStatutEnum } from "@shared/service-proxies/service-proxies"
import { DevisContentItem } from "./DevisContentItem"
import { Client } from './Client'

// export class DevisItem { 
//     id: number
//     reference!: string
//     client!: Client
//     dateEmission!: Date
//     echeancePaiement!: number
//     messageIntroduction!: string
//     piedDePage!: string
//     devisItems!: DevisContentItem[]
//     statut!: DevisStatutEnum
//     montantTtc?: number
//     remise?: number
// }

export class DevisItem { 
    id: number
    reference!: number
    client!: Client
    date_emission!: Date
    echeance!: number
    introduction!: string
    pied_page!: string
    devisItems!: DevisContentItem[]
    statut!: DevisStatutEnum
    montantTtc?: number
    remise?: number
}


