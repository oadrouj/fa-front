import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[isUniqueEmailAddress]'
})
export class IsUniqueEmailAddressDirective {

  element: ElementRef;

  constructor(element: ElementRef) {     
    this.element = element;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.checkForUnicity(this.element.nativeElement.value);
  }
  
  private checkForUnicity(emailAddress: string) {
    //service call
    if(true)
    {
      this.element.nativeElement.after("<span class='validationMessage'>Cette adresse mail existe déjà !</span>");
    }
  }

}
