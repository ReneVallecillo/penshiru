import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LawComponent } from './law.component';
import { LawListComponent } from './law-list';

const LawRouter: Routes = [
  {
    path: 'law',
    component: LawComponent,
    children: [
      {
        path: '',
        component: LawListComponent,
      }
    ]
  }
];

export const lawRouting: ModuleWithProviders =
  RouterModule.forChild(LawRouter);
