import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core'
import { ContactInfosDto, InfosEntrepriseDto, InfosEntrepriseServiceProxy } from '@shared/service-proxies/service-proxies'
import { AppSessionService } from '@shared/session/app-session.service'
import * as moment from 'moment'
import { ItemPreviewComponent } from '../components/item-preview/item-preview.component'

export interface ItemPreviewComponentInput {
  item: any
  title?: string
  summaryTotalHT: number
  summaryTVA: number
  remiseAmount: number
  logoSrc: string
}

export interface ItemPreviewComponentArgs {
  item: any
  title?: string
  summaryTotalHT: number
  summaryTVA: number
  remiseAmount: number
  logoSrc: string
  infosEntreprise: ContactInfosDto

}

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  infosEntreprise: ContactInfosDto
  
  constructor(
    private _sessionService: AppSessionService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
  ) {
    this.getEntrepriseInfosApi()
  }

  private extractPreviewComponent(){

  }

  getEntrepriseInfosApi(){
    this._infosEntrepriseService.getContactInfos()
      .subscribe(res => { this.infosEntreprise = res})
  }

  previewItem(itemPreviewComponentInput: ItemPreviewComponentInput) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ItemPreviewComponent,
    )
    const componentRef = componentFactory.create(this.injector)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement

    document.body.appendChild(domElem)
    document.body.style.width = '44%'

    componentRef.instance.previewAsPDF({...itemPreviewComponentInput, infosEntreprise: this.infosEntreprise})
    document.body.removeChild(domElem)
    document.body.style.width = '100%'
    componentRef.destroy()
  }

  download(itemPreviewComponentInput: ItemPreviewComponentInput) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ItemPreviewComponent,
    )
    const componentRef = componentFactory.create(this.injector)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement

    document.body.appendChild(domElem)
    document.body.style.width = '44%'

    componentRef.instance.downloadAsPDF({...itemPreviewComponentInput, infosEntreprise: this.infosEntreprise})
    document.body.removeChild(domElem)
    document.body.style.width = '100%'
    componentRef.destroy()
  }

  print(itemPreviewComponentInput: ItemPreviewComponentInput){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ItemPreviewComponent,
    )
    const componentRef = componentFactory.create(this.injector)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement

    document.body.appendChild(domElem)
    document.body.style.width = '44%'

    componentRef.instance.print({...itemPreviewComponentInput, infosEntreprise: this.infosEntreprise})
    document.body.removeChild(domElem)
    document.body.style.width = '100%'
    componentRef.destroy()
  }

}
