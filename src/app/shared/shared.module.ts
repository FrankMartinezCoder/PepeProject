import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent, LoadingModalComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
