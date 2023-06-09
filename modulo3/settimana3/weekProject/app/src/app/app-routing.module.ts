import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  { path: '', redirectTo: 'pages/auth', pathMatch: 'full', },

  { path: 'pages/auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },

  { path: 'pages/dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  ,canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
