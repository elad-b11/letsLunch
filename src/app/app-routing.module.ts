import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeverComponent } from './hever/hever.component';
import { CardListComponent } from './card-list/card-list.component';
import { HeverNotficationComponent } from './hever-notfication/hever-notfication.component';
import { UserPageComponent } from './user-page/user-page.component'

const routes: Routes = [
  { path: 'hevernotification', component: HeverNotficationComponent },
  { path: 'hever', component: HeverComponent },
  { path: '', component: CardListComponent },
  {path: 'login', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


