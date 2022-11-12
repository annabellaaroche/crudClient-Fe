import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CilindroComponent } from './cilindro/cilindro.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'cilindro', component: CilindroComponent},
  {path: 'client', component: ClientComponent},
  {path: 'client-create', component: ClientCreateComponent},
  {path: 'client-view/:clientId', component: ClientViewComponent},
  {path: 'client-edit/:clientId', component: ClientEditComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
