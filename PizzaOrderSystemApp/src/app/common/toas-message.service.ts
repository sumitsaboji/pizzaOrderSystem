import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasMessageService {

  constructor(private messageService: MessageService) {
  }

  showSuccessMessage(message: string) {
      this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: message });
  }

  showErrorMessage(message: string) {
      this.messageService.add({ key: 'tl', severity: 'error', summary: 'Error', detail: message });
  }

  showInfoMessage(message: string) {
      this.messageService.add({key: 'tl', severity: 'info', summary: 'Information', detail: message });
  }

  showWarningMessage(message: string) {
      this.messageService.add({key: 'tl', severity: 'warn', summary: 'Warning', detail: message });
  }


}
