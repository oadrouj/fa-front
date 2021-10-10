import { DevisStatutEnum } from "@shared/service-proxies/service-proxies"
import { DevisContentItem } from "./DevisContentItem"
import { Client } from './Client'

export class DevisItem { 
    id: number
    reference!: string
    client!: Client
    date_emission!: Date
    echeance!: number
    introduction!: string
    pied_page!: string
    contentItems!: DevisContentItem[]
    statut!: DevisStatutEnum
    montant_ttc?: number
    remise?: number
}


