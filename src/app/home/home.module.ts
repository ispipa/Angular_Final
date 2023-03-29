import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { NavComponent } from './components/nav/nav.component';
import {MaterialModule} from "../material/material.module";




@NgModule({
    declarations: [
        NavComponent,
    ],
    exports: [
        NavComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule
    ]
})
export class HomeModule { }
