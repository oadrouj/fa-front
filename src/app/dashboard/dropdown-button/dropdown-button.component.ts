import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Listbox } from 'primeng/listbox';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css']
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
}
