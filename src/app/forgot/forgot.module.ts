import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule }   from '@angular/forms';
import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ForgotRoutingModule,
    FormsModule
  ],
  declarations: [ForgotComponent]
})
export class ForgotModule { }
