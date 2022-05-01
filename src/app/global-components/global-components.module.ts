import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CarouselComponent } from './carousel/carousel.component';

const components = [
  ButtonComponent,
  HeaderComponent,
  FooterComponent,
  DisclaimerComponent,
  CarouselComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class GlobalComponentsModule {}
