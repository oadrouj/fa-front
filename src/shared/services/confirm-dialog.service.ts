import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';


interface ConfirmDialogArgs {message?: string, acceptCallback: () => void, rejectCallback: (type: any) => void}

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

constructor(
  private confirmationService: ConfirmationService,
) { }

  deleteConfirm({message, acceptCallback, rejectCallback}: ConfirmDialogArgs){
    this.confirmationService.confirm({
      message: message || 'Êtes-vous sûr de vouloir continuer ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        acceptCallback();
      },
      reject: (type: any) => {
       rejectCallback(type);
      },
    })
  }
}
