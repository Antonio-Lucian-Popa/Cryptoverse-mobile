import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from '../chart/chart.component';
import { ShortNumberPipe } from '../pipes/shortNumber.pipe';


const NB_MODULES = [
  NgChartsModule,
  ReactiveFormsModule
];
const COMPONENTS = [
  ChartComponent,
  ShortNumberPipe
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
