import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { Validators } from '@angular/forms';
import { ValidatorComponent } from './validator/validator.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './nav/header/header.component';
import { LeftMenuComponent } from './nav/left-menu/left-menu.component';



@NgModule({
  declarations: 
  [
    CertificateComponent,
    CourseComponent,
    CourseDetailComponent,
    LoginComponent,
    MyCourseComponent,
    ProfileComponent,
    RegisterComponent,
    ValidatorComponent,
    LayoutComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[]
})
export class ModuleModule { }
