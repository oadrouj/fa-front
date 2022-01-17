import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ActivityLogComponent} from './activity-log/activity-log.component'
import { PrimengSharedModule } from '@shared/primeng-shared.module';
import { RouterModule } from '@angular/router';
import { MonthGoalTrackingComponent } from './month-goal-tracking/month-goal-tracking.component'
import { PeriodicTrackingComponent } from './periodic-tracking/periodic-tracking.component'
import { TotalStatisticsComponent } from './total-statistics/total-statistics.component'
import { MonthlyEvolutionComponent } from './monthly-evolution/monthly-evolution.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ]),
    PrimengSharedModule,
    
  ],
  declarations: [
    DashboardComponent,
    ActivityLogComponent,
    MonthGoalTrackingComponent,
    PeriodicTrackingComponent,
    TotalStatisticsComponent,
    MonthlyEvolutionComponent,
  ]
})
export class DashboardModule { }
