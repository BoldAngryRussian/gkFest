
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FstDashboardComponent } from './views/fst-dashboard/fst-dashboard.component';
import { FstServicesComponent } from './views/fst-services/fst-services.component';
import { FstNeighborsComponent } from './views/fst-neighbors/fst-neighbors.component';
import { FstVillageComponent } from './views/fst-village/fst-village.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard' , component: FstDashboardComponent },
  { path: 'services' , component: FstServicesComponent },
  { path: 'neighbors' , component: FstNeighborsComponent },
  { path: 'village' , component: FstVillageComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
