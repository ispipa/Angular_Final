import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import {MaterialModule} from "../../../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConfirmDialogComponent } from './components/list/dialog/confirm-dialog.component';
import {FormatDatePipe} from "../../../common/format.date.pipe";


@NgModule({
    declarations: [
        CreateComponent,
        ListComponent,
        ConfirmDialogComponent,
        FormatDatePipe
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule
    ],

    exports: [
        FormatDatePipe
    ]
})
export class TaskModule { }
