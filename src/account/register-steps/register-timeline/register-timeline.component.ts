import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-timeline',
  templateUrl: './register-timeline.component.html',
  styleUrls: ['./register-timeline.component.scss']
})
export class RegisterTimelineComponent implements OnInit {

  constructor() { }

  @Input() step: number
  ngOnInit() {
  }

}
