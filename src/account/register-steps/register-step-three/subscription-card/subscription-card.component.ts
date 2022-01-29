import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.css']
})
export class SubscriptionCardComponent implements OnInit {

  constructor() { }

  @Input() headerTitle: string
  @Input() description: string
  @Input() priceModel: string
  @Input() features: string[]
  @Input() price: number
  @Input() primaryColor: string
  @Input() secondaryColor: string
  @Output() clickEmit = new EventEmitter()
  ngOnInit() {
  }

  emiClickEvent(){
    this.clickEmit.emit();
  }


}
