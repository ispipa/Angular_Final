import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {ErrorComponent} from "../common/error/error.component";


const routes: Routes = [
    {
      path: '',
      component:NavComponent,
      children:[
        /*{
          path: 'user',
          loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
        },*/
        {
          path: '',
          loadChildren: () => import('./components/task/task.module').then(m => m.TaskModule)
        }
      ]
    },

 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
