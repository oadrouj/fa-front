import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-group',
  templateUrl: './dropdown-group.component.html',
  styleUrls: ['./dropdown-group.component.scss']
})
export class DropdownGroupComponent implements OnInit {

  constructor() { }

  @Input() control: AbstractControl
  @Input() labelText: string
  @Input() placeholder: string
  @Input() options: any
  
  ngOnInit() {
  }

}
