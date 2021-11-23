
import { Moment } from "moment"

export class FactureContentItem {
    description!: string
    date!: Moment
    quantity!: number
    unit!: string
    unitPriceHT!: number 
    tva!: number
    totalTtc!: number
}
