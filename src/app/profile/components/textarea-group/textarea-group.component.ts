import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-group',
  templateUrl: './textarea-group.component.html',
  styleUrls: ['./textarea-group.component.scss']
})
export class TextareaGroupComponent implements OnInit {

  constructor() { }

  @Input() control: AbstractControl
  @Input() labelText: string
  @Input() placeholder: string
  
  ngOnInit() {
  }

}
