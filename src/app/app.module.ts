import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './components/app-seabattle/cell/cell.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FieldComponent } from './components/app-seabattle/field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    FooterComponent,
    HeaderComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
