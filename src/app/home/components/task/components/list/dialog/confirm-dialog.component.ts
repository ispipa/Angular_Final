import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TaskInterface} from "../../../../../../interfaces/task";
import {DialogData} from "../../../../../../interfaces/dialog-data";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent  implements OnInit{

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              //@Inject(MAT_DIALOG_DATA) public task: TaskInterface
              @Inject(MAT_DIALOG_DATA) public dataUser: DialogData = {
                task : dataUser.task,
                statusEdit : dataUser.statusEdit
              }) {}


  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }
  update() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }

}
