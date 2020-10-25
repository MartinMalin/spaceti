import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './components';
import { DataService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { HistogramComponent } from './components/histogram/histogram.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { ColorProgressComponent } from './components/color-progress/color-progress.component';

@NgModule({
  declarations: [AppComponent, MainComponent, HistogramComponent, ColorProgressComponent, TimeFormatPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
