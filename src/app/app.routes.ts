import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-section/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPageComponent }
];
