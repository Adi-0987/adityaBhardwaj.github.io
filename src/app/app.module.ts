import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSpyModule } from 'ngx-scrollspy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';
import { ResponsiveDirective } from './Directives/responsive.directive';
import { EducationComponent } from './education/education.component';
import { ScrollDirective } from './Directives/scroll.directive';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ScrollContainerComponent,
    ResponsiveDirective,
    EducationComponent,
    ScrollDirective,
    WorkComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent 
  ],
  imports: [
    NgxTypedJsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
