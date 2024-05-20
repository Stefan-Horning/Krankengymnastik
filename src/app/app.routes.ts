import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { PhysiotherapieComponent } from './physiotherapie/physiotherapie.component';
import { OsteopathieComponent } from './osteopathie/osteopathie.component';
import { HeilkundeComponent } from './heilkunde/heilkunde.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'team', component: TeamComponent},
    { path: 'leistungen' , component:ServicesComponent},
    { path: 'physiotherapie' , component:PhysiotherapieComponent},
    { path: 'osteopathie' , component:OsteopathieComponent},
    { path: 'heilkunde' , component:HeilkundeComponent},
    { path: '**', redirectTo: 'home' }
];
