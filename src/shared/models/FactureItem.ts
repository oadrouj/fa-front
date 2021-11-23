import { FactureContentItem } from "./FactureContentItem"
import { Client } from './Client'
import { FactureStatutEnum } from '../enums/FactureStatut.enum'
export class FactureItem { 
    id: number
    reference!: number
    client!: Client
    date_emission!: Date
    echeance!: number
    introduction!: string
    pied_page!: string
    devisItems!: FactureContentItem[]
    statut!: FactureStatutEnum
    montantTtc?: number
    remise?: number
}