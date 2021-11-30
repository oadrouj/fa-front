import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';


interface ToastArgs{ summary?: string, detail?: string}

@Injectable({
  providedIn: 'root',
})

export class ToastService {

constructor(
  private messageService: MessageService,
) { 

}

toast(severity: string, summary: string, detail: string){
  this.messageService.add({
    severity,
    summary,
    detail
  })
}
 
success({summary, detail}: ToastArgs){
  this.toast('success', summary, detail)
}

info({summary, detail}: ToastArgs){
  this.toast('info', summary, detail)
}

warn({summary, detail}: ToastArgs) {
  this.toast('warn', summary || 'Attention', detail)
  
}

error = ({summary, detail}: ToastArgs) => {
  this.toast('error',  summary || 'Erreur', detail)
}

deleteInternalError = () => {
  this.error({
    summary: 'Erreur',
    detail: "Une erreur s'est produite lors de la suppression",
  })
}

internalError(){
  this.error({
    summary: 'Erreur',
    detail: 'Erreur produite',
  })
}

}
