import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StatisticsServiceProxy } from '@shared/service-proxies/service-proxies';
import { ToastService } from '@shared/services/toast.service';
import $ from 'jquery';
import 'round-slider';

@Component({
  selector: 'app-month-goal-tracking',
  templateUrl: './month-goal-tracking.component.html',
  styleUrls: ['./month-goal-tracking.component.css'],

})
export class MonthGoalTrackingComponent implements OnInit {
  monthTargetAmount = 0;
  accomplishedAmount = 0;
  newMonthTargetAmount: any;
  progressRate: number = 0;
  @ViewChild("inplace") inplace 
  accomplishedAmountPercentage: any;
  @Input() currency : string;
  sliderPosY;
  sliderWidth;
  sliderHeight;

  constructor(
    private _statisticsServiceProxy: StatisticsServiceProxy,
    private _toastService: ToastService,
  ) { }

  ngOnInit() {
    this._statisticsServiceProxy.getMonthTargetInfos().subscribe(res => {
      this.monthTargetAmount = res.monthTargetAmount 
      this.accomplishedAmount = res.accomplishedAmount



      this.progressRate = this.accomplishedAmount * 100 / this.monthTargetAmount;
   

       $("#slider1").roundSlider({
        value: this.progressRate,
        disabled: false,
        radius: 70,
        width: 4,
        handleSize: "+5",
        handleShape: "full",
        handleColor: '#5CBCA6',
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        borderColor: 'none',
        pathColor: '#EFF3FB',
        rangeColor: '#5CBCA6',
        readOnly: true,
        animation: false,
        editableTooltip: true,
        step: 0.01,
        tooltipFormat: function(args){
          return `</br><span style="color: #898E99 !important; font-size: 0.95rem;">Accompli</span>`
      }
     
      });
      this.updateSlider(this.accomplishedAmount * 100 / this.monthTargetAmount)
      this.applySliderStyles() 
      
      this.sliderWidth = (document.getElementById('slider1') as HTMLElement).style.width;
      this.sliderHeight = (document.getElementById('slider1') as HTMLElement).style.height;



      (document.getElementsByClassName('relativeParent')[0] as HTMLElement).style.height = this.sliderHeight;
      (document.getElementsByClassName('relativeParent')[0] as HTMLElement).style.width = this.sliderWidth;


    })

    
    /* $("#slider1").roundSlider({
      value: 0,
      disabled: false,
      radius: 70,
      width: 4,
      handleSize: "+5",
      handleShape: "full",
      handleColor: '#5CBCA6',
      sliderType: "min-range",
      startAngle: 90,
      svgMode: true,
      borderColor: 'none',
      pathColor: '#EFF3FB',
      rangeColor: '#5CBCA6',
      readOnly: true,
      animation: false,
      editableTooltip: true,
      step: 0.01,
      tooltipFormat: function(args){
        return args.value.toFixed(2)+ '% <span style="color: #898E99 !important; font-size: 0.95rem;">'+ this.progressRate+ ' Oussama</spam>'
    }
   
    });
    this.applySliderStyles() */
  }

  applySliderStyles(){
    (document.querySelector('.rs-handle') as HTMLElement).style.background = '#5CBCA6';
    let tooltip = (document.querySelector('.rs-tooltip') as HTMLElement)

    tooltip.style.fontSize = '1.75rem';
    tooltip.style.transform = 'translate(-50%, -50%)';
    tooltip.style.lineHeight = '1.5rem';
    tooltip.style.top = '60% !important';
    tooltip.style.marginTop = '0';
    tooltip.style.marginLeft = '0';
  }

  updateSlider(accomplishedAmountPercentage){
    var obj1 =  $("#slider1").data("roundSlider");
    obj1.setValue(accomplishedAmountPercentage);
    
    this.applySliderStyles();
  }

  createOrUpdateMonthTargetAmount(){
    if(this.newMonthTargetAmount != undefined) {
     this._statisticsServiceProxy.createOrUpdateMonthTargetAmount(this.newMonthTargetAmount)
      .subscribe(res => {
        if(res){
          this.monthTargetAmount = this.newMonthTargetAmount
          this.progressRate = this.accomplishedAmount * 100 / this.monthTargetAmount;

          this._toastService.success({summary: 'Opértion réussie', detail: 'Le montant d\'objectif du mois est changé avec succès'})
          this.inplace.deactivate()

          this.updateSlider(this.accomplishedAmount * 100 / this.monthTargetAmount)
        }
        else { 

        }
      })
    }
    else {
      this._toastService.error({detail: 'Vous devez remplir le chemps objectif de mois !'})
    }
  }
}
