import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'team', component: TeamComponent},
    { path: 'leistungen' , component:ServicesComponent},
    { path: '**', redirectTo: 'home' }
];
