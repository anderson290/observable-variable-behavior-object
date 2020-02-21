import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableComponent } from './variable/variable.component';
import { RecieveVariableComponent } from './recieve-variable/recieve-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    RecieveVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
