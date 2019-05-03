import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './root/hero-store/reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ hero: heroReducer })],
})
export class RootStoreModule {}
