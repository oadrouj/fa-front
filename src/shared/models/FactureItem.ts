import { FactureContentItem } from "./FactureContentItem"

export class FactureItem {
    reference!: string
    client!: string 
    date_emission!: Date
    echeance!: number
    introduction!: string
    pied_page!: string
    contentItems!: FactureContentItem[]
    statut!: string
    montant_ttc?: number
    remise?: number
}
