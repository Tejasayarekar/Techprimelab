import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { AddprojectComponent } from './addproject/addproject.component'
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },
  {
    path: "loginpage",
    component: LoginpageComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children:[
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "projectdetails",
        component: ProjectdetailsComponent
      },
      {
        path: "addproject",
        component: AddprojectComponent
      },
      {
        path: "graph",
        component: GraphComponent
      },
    ]
  },
  {
    path: "projectdetails",
    component: ProjectdetailsComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
