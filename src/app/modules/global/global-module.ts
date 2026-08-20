import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Index } from './components/index';
import { Nabvar } from './components/nabvar/nabvar';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    Nabvar,
    Index,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatCardModule
],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class GlobalModule { }
