import { Component, OnInit} from '@angular/core';
import {TaskInterface} from "../../../../../interfaces/task";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {TaskService} from "../../../../../core/services/task.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./dialog/confirm-dialog.component";
import * as moment from 'moment';
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private rooter:Router,private cookieService: CookieService,private taskService:TaskService,
              private dialog: MatDialog, private snackBar:MatSnackBar) { }

  listResized!:boolean[];

  token!:string;

  Tasks:TaskInterface[] = [];

  TasksCopy:TaskInterface[] = [];



  dateFilter = [
    {value: 'today', viewValue: 'Today'},
    {value: '7', viewValue: 'Next 7 days'},
    {value: '30', viewValue: 'Next 30 days'},
    {value: 'all', viewValue: 'All'},
  ];

  stateFilter = [
    {value: 'completed', viewValue: 'Completed'},
    {value: 'pending', viewValue: 'Pending'},
  ];

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
    if(this.token == ""){
      this.cookieService.delete('token');
      this.cookieService.delete("username");
      this.rooter.navigateByUrl('');
    }
      this.taskService.getTasks().subscribe({
        next:(response) => {
          this.Tasks = response;
          this.TasksCopy = response;
          this.listResized = new Array(this.Tasks.length).fill(true);
          //this.listStatusChecked = new Array(this.Tasks.length).fill(false);
          console.log(this.listResized);
          console.log(this.Tasks.length);
        },
        error:(error) => {
          console.log(error);
          this.showSnackBar(error.error == null? "Invalid token, please log in again." : error.error.message ,"Close");
          if(error.error == null){
            this.cookieService.delete("token","/");
            this.cookieService.delete("username","/");
            this.rooter.navigateByUrl('');
          }
        }
      });
    //this.listResized = new Array(2).fill(true);
  }


  edit(id:string | undefined){
    if(id == undefined){
      return;
    }
    this.rooter.navigateByUrl(`task/edit/${id}`);
  }

  delete(id:number ){
    console.log(this.Tasks[id]);
    const dialog = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {statusEdit: false, task:this.Tasks[id]}
      }
    )
    dialog.afterClosed().subscribe(
      (result) => {
        if(result) {
          this.taskService.deleteTask(this.Tasks[id].id_Task!).subscribe({
            next: (response) => {
              //this.router.navigate(['/heroes']);
              this.Tasks.splice(id,1);
              this.TasksCopy = this.Tasks;
              this.showSnackBar("Task deleted successfully", "Close");
            },
            error: (error) => {
              this.showSnackBar(error.error == null? "Invalid token, please log in again." : error.error.message ,"Close");
              if(error.error == null){
                this.cookieService.delete("token","/");
                this.cookieService.delete("username","/");
                this.rooter.navigateByUrl('');
              }
            }
          })
        }
      }
    )
  }

  view(id:number){
    this.listResized[id] = !this.listResized[id]
    console.log(this.listResized);
  }

  status(id:number){
    const dialog = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {task:this.Tasks[id],
          statusEdit:true}
      }
    );
    dialog.afterClosed().subscribe(
      (result) => {
        if(result){
          this.Tasks[id].state = !this.Tasks[id].state;
          this.taskService.updateTask(this.Tasks[id]).subscribe({
            next:(response) => {
              console.log(response);
            },
            error:(error) => {
              console.log(error);
            }
          })
        }
        console.log(result);
      }
    );
  }
  filterByDate(value:string){
    let date = moment(new Date()).format('YYYY-MM-DD');
    let endDate:string;
    switch (value) {
      case "today":
        this.Tasks = this.Tasks.filter((task) =>
          moment(task.expiration_date).isBetween(date, date, 'days', "[]")
        );
        break;
      case "7":
           endDate = moment(date).add(7,'days').format('YYYY-MM-DD');
          this.Tasks = this.Tasks.filter((task) =>
             moment(task.expiration_date).isBetween(date, endDate,'days', "[]")
          );
        console.log(endDate);
        break;
      case "30":
        endDate = moment(date).add(30,'days').format('YYYY-MM-DD');
        this.Tasks = this.Tasks.filter((task) =>
          moment(task.expiration_date).isBetween(date, endDate,'days', "[]")
        );
        console.log(endDate);
        break;
      case "all":
        this.Tasks = this.TasksCopy;
        break;
    }
  }

  filterByState(value:string){
    switch (value) {
      case "completed":
        this.Tasks = this.Tasks.filter((task) =>
          task.state
        );
        break;
      case "pending":
        this.Tasks = this.Tasks.filter((task) =>
          !task.state
        );
        break;
    }
  }

  showSnackBar(message:string,action:string){
    this.snackBar.open(
      message,
      action,
      {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
  }

}
