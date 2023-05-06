import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCertificateComponent } from './admin-certificate/admin-certificate.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminCourseDetailComponent } from './admin-course-detail/admin-course-detail.component';
import { AdminMemberComponent } from './admin-member/admin-member.component';
import { MemberdetailComponent } from './memberdetail/memberdetail.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';



@NgModule({
  declarations: 
  [
    AdminCertificateComponent,
    AdminCourseComponent,
    AdminCourseDetailComponent,
    AdminMemberComponent,
    MemberdetailComponent,
    PaymentComponent,
    AdminlayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModuleModule { }
