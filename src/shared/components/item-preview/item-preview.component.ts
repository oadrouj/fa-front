import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import html2canvas from 'html2canvas'
import * as moment from 'moment'
import { AppSessionService } from '../../session/app-session.service'
import jsPDF from 'jspdf'
import { URL } from 'url'

export interface ItemPreviewComponentArgs {
  item: any
  title?: string
  summaryTotalHT: number
  summaryTVA: number
  remiseAmount: number
}

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent implements OnInit {
  constructor(
    private _sessionService: AppSessionService,
    private _ref: ChangeDetectorRef,
  ) {}

  @Input() item: any
  @Input() title: string
  @Input() logoSrc: string
  @Input() summaryTotalHT: number
  @Input() summaryTVA: number
  @Input() remiseAmount: number
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef

  get getClientName() {
    return this.item && (this.item.client.nom || this.item.client.raisonSociale)
  }
  contentItemsCols = [
    { header: 'DESIGNATION', field: 'designation', type: 'text', colspan: 2 },
    { header: 'DATE', field: 'date', type: 'date', colspan: 0 },
    { header: 'QTÉ', field: 'quantity', type: 'text' },
    { header: 'UNITE', field: 'unit', type: 'text' },
    { header: 'PU HT', field: 'unitPriceHT', type: 'currency' },
    { header: 'TVA', field: 'tva', type: 'pourcentage' },
    { header: 'TOTAL TTC', field: 'totalTtc', type: 'currency', colspan: 0 },
  ]
  ngOnInit() {}

  getUserName = () => this._sessionService.user.userName

  getDateEcheance = (dateEmission: Date, echeance: number) =>
    moment(dateEmission).add(echeance, 'days').toDate()

  updateProps(itemPreviewComponentArgs: ItemPreviewComponentArgs) {
    this.item = itemPreviewComponentArgs.item
    this.title = itemPreviewComponentArgs.title
    this.remiseAmount = itemPreviewComponentArgs.remiseAmount
    this.summaryTVA = itemPreviewComponentArgs.summaryTVA
    this.summaryTotalHT = itemPreviewComponentArgs.summaryTotalHT

    this._ref.detectChanges()
  }

  previewAsPDF(itemPreviewComponentArgs: ItemPreviewComponentArgs) {
    this.updateProps(itemPreviewComponentArgs)

    let element = this.pdfTable.nativeElement
    html2canvas(element, {
      scale: 2,
      onclone: (dcm) => {
        let data = dcm.getElementById('contentToConvert')
        data.classList.add('html2canvas')
        dcm.getElementById('pageHeader').innerHTML = "<span class='font-semibold'>Objet: </span>" + this.item.messageIntroduction
        dcm.getElementById('pageFooter').innerText = this.item.piedDePage
      },
    }).then((canvas) => {
      let docWidth = 205
      let docHeight = (canvas.height * docWidth) / canvas.width

      const contentDataURL = canvas.toDataURL('image/png')
      let doc = new jsPDF('p', 'mm', 'a4')
      let position = 0

      const items = this.item.devisItems || this.item.factureItems
      let table = document.querySelector('#contentToConvert p-table')
      let rest = items.length % 5
      let count = (items.length - rest) / 5 + +!!rest,
        splittedItems: any

      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      let url= doc.output('bloburl');
      (window as any).open(url, '_blank');


      // win.document.write(
      //   '<iframe src="' + contentDataURL.replace('data:image/png;', 'data:application/pdf;') + 
      //     '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>',
      // ) 

      // for(let i=0; i < count; i++){
      //   splittedItems = items.slice(length, length + 4)
      //   console.log(length)
      //   doc.addPage()
      //   doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

      // }
    })
  }


}
