import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderSlideComponent } from './components/main-page/header-slide/header-slide.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { FollowerComponent } from './components/reusable/follower/follower.component';
import { InstrumentsComponent } from './components/main-page/instruments/instruments.component';
import { IconComponent } from './components/reusable/icon/icon.component';
import { ProjectsComponent } from './components/main-page/projects/projects.component';
import { ProjectComponent } from './components/main-page/projects/project/project.component';
import { FindMeComponent } from './components/main-page/header-slide/find-me/find-me.component';
import { HobbiesComponent } from './components/main-page/hobbies/hobbies.component';
import { HobbyComponent } from './components/main-page/hobbies/hobby/hobby.component';
import { SliderComponent } from './components/reusable/slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderSlideComponent,
    HighlightTextDirective,
    FollowerComponent,
    InstrumentsComponent,
    IconComponent,
    ProjectsComponent,
    ProjectComponent,
    FindMeComponent,
    HobbiesComponent,
    HobbyComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkDrag,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
