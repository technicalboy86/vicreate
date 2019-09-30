import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { StorageService } from './app.storage';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        NgxSpinnerModule,
        ToastrModule.forRoot()
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
