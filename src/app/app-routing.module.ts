import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReaderLayoutComponent } from './pages/reader-layout/reader-layout.component';
import { ReadersectComponent } from './pages/readersect/readersect.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },

  {
    path: '',
    component: ReaderLayoutComponent,
    children: [
      {
        path: 'readersect',
        component: ReadersectComponent

      }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
