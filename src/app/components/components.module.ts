import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BannerRegisterComponent } from './banner-register/banner-register.component';

@NgModule({
  declarations: [PageNotFoundComponent, BannerRegisterComponent],
  exports: [PageNotFoundComponent, BannerRegisterComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
