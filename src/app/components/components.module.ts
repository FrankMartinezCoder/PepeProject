import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';

@NgModule({
  declarations: [PageNotFoundComponent, LoadingModalComponent],
  exports: [PageNotFoundComponent, LoadingModalComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
