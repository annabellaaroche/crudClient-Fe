import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path: '', component: ClientComponent},
  {path: 'client-create', component: ClientCreateComponent},
  {path: 'client-view/:clientId', component: ClientViewComponent},
  {path: 'client-edit/:clientId', component: ClientEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
