import { ElementRef, Injectable, ViewRef } from '@angular/core';
import { AppSessionService } from '@shared/session/app-session.service';
import { ItemPreviewComponent } from '../components/item-preview/item-preview.component';



export interface ItemPreviewComponentArgs {
  item: any
  title: string
  summaryTotalHT: number
  summaryTVA: number
  remiseAmount: number
  contentItemsCols: any
}

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

constructor(
  private _sessionService: AppSessionService
) {

 }

ref 
// = new ItemPreviewComponent(this._sessionService)

previewItem(itemPreviewComponentArgs: ItemPreviewComponentArgs){
  this.ref.item = itemPreviewComponentArgs.item
  this.ref.title = itemPreviewComponentArgs.title
  this.ref.summaryTotalHT = itemPreviewComponentArgs.summaryTotalHT
  this.ref.summaryTVA = itemPreviewComponentArgs.summaryTVA
  this.ref.remiseAmount = itemPreviewComponentArgs.remiseAmount
  this.ref.contentItemsCols = itemPreviewComponentArgs.contentItemsCols
  
  console.log(this.ref)
}

}
