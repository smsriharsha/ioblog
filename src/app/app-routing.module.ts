import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './homepage/project/project.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo: '/homepage' , pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'resume' , component: ResumeComponent},
  {path: 'homepage/:id' , component: ProjectComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  })
  export class AppRoutingModule { }
