import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    RootStoreModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
