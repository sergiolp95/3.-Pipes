import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//agregado para que funcione fecha en idiomas
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { capitalizadoPipe } from './pipes/capitalizado.pipe';

//agregado para que funcione el pipe de la fecha
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
registerLocaleData(localeEs);
import { PasswordPipe } from './pipes/password.pipe';


@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
