import { ModuleWithProviders }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LawComponent } from './law.component';

const LawRouter: Routes = [
  { path: 'law', component: LawComponent },
];

export const lawRouting:ModuleWithProviders = 
RouterModule.forChild(LawRouter)

