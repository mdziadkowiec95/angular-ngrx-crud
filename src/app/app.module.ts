import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store/app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-database/in-memory-data.service";
import { HttpClientModule } from "@angular/common/http";
import { UsersComponent } from "./users/users.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./users/store/users.effects";
import { ImgLoadedComponent } from "./shared/components/img-loaded/img-loaded.component";
import { CardComponent } from "./shared/components/card/card.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DataTableComponent } from "./shared/components/data-table/data-table.component";
import { CarsComponent } from "./cars/cars.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    LoaderComponent,
    UserDetailsComponent,
    ImgLoadedComponent,
    CardComponent,
    DataTableComponent,
    CarsComponent,
    NavbarComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([UsersEffects]),
    NgxDatatableModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
