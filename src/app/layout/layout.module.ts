import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,NgbModule 
  ],
  exports:[
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
