import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { kingsComponent } from './kings.component';
import { kingsRoutingModule } from './kings-routing.module';
import { JwtService } from '../services/jwt.service';

@NgModule({
providers:[
    JwtService
],
  declarations: [kingsComponent],
  imports: [
    CommonModule,
    kingsRoutingModule
]
})
export class KingsModule {}
