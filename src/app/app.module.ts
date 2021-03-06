import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import  localeEs  from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PasswordPipe } from './pipes/password.pipe';


@NgModule({
    declarations: [
        AppComponent,
        CapitalizePipe,
        PasswordPipe,
    ],
    imports: [
        BrowserModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'en'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
