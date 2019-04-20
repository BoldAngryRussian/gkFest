import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';

import { SharedModule } from './shared/shared.module';


// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { FstDashboardComponent } from './views/fst-dashboard/fst-dashboard.component';
import { FstServicesComponent } from './views/fst-services/fst-services.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { FstNeighborsComponent } from './views/fst-neighbors/fst-neighbors.component';
import { FstVillageComponent } from './views/fst-village/fst-village.component';

@NgModule({
  declarations: [
    AppComponent,
    FstDashboardComponent,
    FstServicesComponent,
    FooterComponent,
    FstNeighborsComponent,
    FstVillageComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
