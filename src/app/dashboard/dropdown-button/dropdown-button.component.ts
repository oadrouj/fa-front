import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Listbox } from 'primeng/listbox';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css'],
  host: {
   '(document:click)': 'onClick($event)',
 },
})
export class DropdownButtonComponent implements OnInit, AfterViewInit{
  listBoxDisplay: any

  constructor() { }

  @Input() label = ''
  @Input() dropdownType : 'calendar' | 'listBox'
  @Input() listOptions: Array<any>
  @Input() imagesSrc = []

  @Output() clickEventEmit = new EventEmitter()
  @ViewChild('lst') listBox: Listbox
  fullDate: Date
  yearDate: Date
  dateInline = false
  selectedOption

  ngOnInit() {
    this.selectedOption = this.listOptions[0]
    this.label = !this.label && this.selectedOption
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.collapseListBox();
    
  }

  toggleDropdown(){
     switch (this.dropdownType) {
      case 'calendar':
        this.dateInline=!this.dateInline
        break;
    
      case 'listBox': 
        if(this.listBoxIsCollapsed())
          this.expandListBox()
        else 
          this.collapseListBox()
        break;
     }
     
    
  }

  expandListBox(){
    this.listBox.el.nativeElement.style.display = 'block'
  }

  collapseListBox(){
    this.listBox.el.nativeElement.style.display = 'none'
  }

  listBoxIsCollapsed(){
    return this.listBox.el.nativeElement.style.display == 'none'
  }

  selectFullDate(){
    this.dateInline = false
    this.clickEventEmit.emit(this.fullDate)

  }

  onListClick(){
    this.clickEventEmit.emit(this.selectedOption)
    this.listBox.el.nativeElement.style.display = 'none'
    this.getImageSrc()
  }

  getImageSrc(){
    if(this.imagesSrc.length)
      return this.imagesSrc[this.listOptions.findIndex(i => i == this.selectedOption)]

    else
      return 'assets/img/dashbord-date.png'
  }


  onClick(event) {
    if(document.getElementById('drop-calendar')){

      if (!document.getElementById('drop-btn').contains(event.target) && !document.getElementsByClassName('drop-calendar')[0].contains(event.target)){ // Clicked outside box
        if(this.dateInline) this.dateInline = !this.dateInline;
      }
    }
    if(document.getElementsByClassName('drop-list')[0]){

      if (!document.getElementsByClassName('drop-btn')[0].contains(event.target) && !document.getElementsByClassName('drop-list')[0].contains(event.target)){ // Clicked outside box
        (document.getElementsByClassName('drop-list')[0]as HTMLElement).style.display="none";
   
    }else{
        (document.getElementsByClassName('drop-list')[0] as HTMLElement).style.display="block";
    }
    }
    if(document.getElementsByClassName('drop-list')[1]){

       if (!document.getElementsByClassName('drop-btn')[1].contains(event.target) && !document.getElementsByClassName('drop-list')[1].contains(event.target)){ // Clicked outside box
          (document.getElementsByClassName('drop-list')[1]as HTMLElement).style.display="none";
     
      }else{
          (document.getElementsByClassName('drop-list')[1] as HTMLElement).style.display="block";

      }
      
    }
  }
}
