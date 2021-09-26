import { DevisContentItem } from "./DevisContentItem"

export class DevisItem {
    reference!: string
    client!: string
    date_emission!: Date
    echeance!: number
    introduction!: string
    pied_page!: string
    contentItems!: DevisContentItem[]
    statut!: string
    montant_ttc?: number
    remise?: number
}
