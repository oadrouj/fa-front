
import { Moment } from "moment"

export class FactureContentItem {
    designation!: string
    date!: Moment
    quantity!: number
    unit!: string
    unitPriceHT!: number 
    tva!: number
    totalTtc!: number
}
