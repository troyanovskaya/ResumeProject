import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderSlideComponent } from './components/main-page/header-slide/header-slide.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { FollowerComponent } from './components/reusable/follower/follower.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderSlideComponent,
    HighlightTextDirective,
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
