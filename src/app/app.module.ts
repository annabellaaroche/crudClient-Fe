import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor, httpInterceptorProviders } from './helpers/auth.interceptor';
import { CilindroComponent } from './cilindro/cilindro.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientCreateComponent,
    ClientViewComponent,
    ClientEditComponent,
    RegisterComponent,
    LoginComponent,
    CilindroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
