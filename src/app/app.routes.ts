import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-section/dashboard-page/dashboard-page.component';
import { DashboardSectionLayoutComponent } from './pages/landing-page-section/dashboard-section-layout.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardSectionLayoutComponent, children: [ {
        path: '', component: DashboardPageComponent
    }]}
];
