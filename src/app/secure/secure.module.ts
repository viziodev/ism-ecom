import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure/secure.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    SecureComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
