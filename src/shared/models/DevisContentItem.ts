import { Moment } from "moment"

export class DevisContentItem {
    description!: string
    date!: Moment
    quantity!: number
    unit!: string
    unitPriceHT!: number 
    tva!: number
    totalTtc!: number
}

// export class DevisContentItem {
//     description!: string
//     date!: Date
//     quantit!: number
//     unite!: string
//     pu!: number 
//     tva!: number
//     total_ttc!: number
//     total_ht!: number
// }

