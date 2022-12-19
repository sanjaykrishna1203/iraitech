import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { Q1Component } from './body/q1/q1.component';
import { Q2Component } from './body/q2/q2.component';
import { Q3Component } from './body/q3/q3.component';
import { Q4Component } from './body/q4/q4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { C1Component } from './body/q4/c1/c1.component';
import { C2Component } from './body/q4/c2/c2.component';
import { C3Component } from './body/q4/c3/c3.component';
import { C4Component } from './body/q4/c4/c4.component';
import { C5Component } from './body/q4/c5/c5.component';
import { XComponent } from './body/q2/x/x.component';
import { YComponent } from './body/q2/y/y.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    XComponent,
    YComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
