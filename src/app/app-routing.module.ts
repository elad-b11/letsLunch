import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeverComponent } from './hever/hever.component';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [
  { path: 'hever', component: HeverComponent },
  { path: '', component: CardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


