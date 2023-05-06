import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Admin/first/first.component';
import { SecondComponent } from './Admin/second/second.component';

const routes: Routes = 
[
  // {path:"", redirectTo:"first", pathMatch:'full'},
  {path:'first', component:FirstComponent},
  {path:'second/:id', component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
