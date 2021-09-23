import { DevisContentItem } from "./DevisContentItem"

export class DevisItem {
    reference!: string
    client!: string
    date_emission!: Date
    echeance!: number
    introduction!: string
    pied_page!: string
    contentItems!: DevisContentItem[]
    montant_ttc?: number
    statut!: string
}
