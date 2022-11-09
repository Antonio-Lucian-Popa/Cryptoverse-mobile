import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from '../chart/chart.component';


const NB_MODULES = [
  NgChartsModule,
  ReactiveFormsModule
];
const COMPONENTS = [
  ChartComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...NB_MODULES]
})
export class SharedModule { }
