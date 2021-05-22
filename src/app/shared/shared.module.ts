import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [BreadcrumbComponent, HeaderComponent, FooterComponent],
  exports: [BreadcrumbComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
