import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { LoginComponent } from '../../pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthLayoutRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthLayoutModule {}
