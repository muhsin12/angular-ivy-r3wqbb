import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SearchComponent } from './search-component/search-component';
import { ResultComponent } from './result-component/result-component';

import { SearchService } from './services/search-service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule],
  declarations: [AppComponent, ResultComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [SearchService],
})
export class AppModule {}
