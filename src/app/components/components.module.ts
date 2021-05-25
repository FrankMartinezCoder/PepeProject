import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BannerRegisterComponent } from './banner-register/banner-register.component';
import { InfoDesUnoComponent } from './info-des-uno/info-des-uno.component';
import { InfoCardsCComponent } from './info-cards-c/info-cards-c.component';
import { InfoCardsRComponent } from './info-cards-r/info-cards-r.component';



@NgModule({
  declarations: [PageNotFoundComponent, BannerRegisterComponent, InfoDesUnoComponent, InfoCardsCComponent, InfoCardsRComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
