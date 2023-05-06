import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ValidatorComponent } from './pages/validator/validator.component';
import { MyCourseComponent } from './pages/my-course/my-course.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';
import { AdminCourseDetailComponent } from './admin/admin-course-detail/admin-course-detail.component';
import { AdminMemberComponent } from './admin/admin-member/admin-member.component';
import { MemberdetailComponent } from './admin/memberdetail/memberdetail.component';
import { PaymentComponent } from './admin/payment/payment.component';

const routes: Routes = 
[
  {path:'', component:LayoutComponent, children:
  [
    {path:'', component:CourseComponent},
    {path:'courseDetail', component:CourseDetailComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'validator', component:ValidatorComponent},
    {path:'myCourse', component:MyCourseComponent},
    {path:'profile', component:ProfileComponent},
    {path:'certificate', component:CertificateComponent},
  ]},
  {path:'admin', component:AdminlayoutComponent, children:
  [
    {path:'course', component:AdminCourseComponent},
    {path:'courseDetail', component:AdminCourseDetailComponent},
    {path:'members', component:AdminMemberComponent},
    {path:'memberdetail', component:MemberdetailComponent},
    {path:'payments', component:PaymentComponent},
    {path:'certificates', component:CertificateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
