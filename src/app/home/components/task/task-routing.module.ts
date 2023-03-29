import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./components/create/create.component";
import {ListComponent} from "./components/list/list.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'edit/:id',
    component:CreateComponent
  },
  {
    path: '**',
    redirectTo: '/task/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
