import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './common/error/error.component';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },*/
  {
    path:'',
    loadChildren: () => import('../app/home/components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
