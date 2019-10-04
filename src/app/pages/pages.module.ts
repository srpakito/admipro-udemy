import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas01Component } from './graficas01/graficas01.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas01Component
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas01Component
  ],
})
export class PagesModule { }
