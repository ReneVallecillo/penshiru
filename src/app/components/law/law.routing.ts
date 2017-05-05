import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LawComponent } from './law.component';
import { LawListComponent } from './law-list';
import { LawContentComponent } from './law-content/law-content.component';

const LawRouter: Routes = [
  {
    path: 'law',
    component: LawComponent,
    children: [
      {
        path: '',
        component: LawListComponent,
      },
      {
        path: 'cat/:id',
        component: LawListComponent,
      },
      {
        path: ':id',
        component: LawContentComponent,
      }

    ]
  }
];

export const lawRouting: ModuleWithProviders =
  RouterModule.forChild(LawRouter);
