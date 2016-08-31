import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes)