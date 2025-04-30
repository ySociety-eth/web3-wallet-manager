import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-section/dashboard-page/dashboard-page.component';
import { DashboardSectionLayoutComponent } from './pages/dashboard-section/dashboard-section-layout.component';
import { LandingPageSectionLayoutComponent } from './pages/landing-page-section/landing-page-section-layout.component';
import { HomePageComponent } from './pages/landing-page-section/home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageSectionLayoutComponent, children: [
        { path: '', component: HomePageComponent }
    ]},
    { path: 'dashboard', component: DashboardSectionLayoutComponent, children: [ {
        path: '', component: DashboardPageComponent
    }]}
];
