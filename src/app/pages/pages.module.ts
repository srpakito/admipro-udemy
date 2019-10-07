import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas01Component } from './graficas01/graficas01.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas01Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas01Component
  ],
})
export class PagesModule { }
