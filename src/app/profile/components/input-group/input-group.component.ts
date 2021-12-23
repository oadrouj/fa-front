import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  constructor() { }

  @Input() control: AbstractControl
  @Input() labelText: string
  @Input() placeholder: string

  ngOnInit() {

  }

}
