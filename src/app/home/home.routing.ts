import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const HomeRouter: Routes = [
  { path: 'home', component: HomeComponent },
];

export const homeRouting:RouterModule = 
RouterModule.forChild(HomeRouter)

