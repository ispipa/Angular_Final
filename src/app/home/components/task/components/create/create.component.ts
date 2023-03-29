import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {TaskInterface} from "../../../../../interfaces/task";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../../../../core/services/task.service";
import {switchMap} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private dateAdapter: DateAdapter<Date>,private rooter:Router,private activatedRoute: ActivatedRoute,
              private taskService:TaskService,private cookieService: CookieService,
              private snackBar:MatSnackBar) {
    this.dateAdapter.setLocale('es-ES');
  }
  disabled = true;

  token!:string;
  statusForm:boolean = false;

  editTask:boolean = false;

  taskForm = this.formBuilder.group({
    title:["",[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
    description:["",[Validators.required,Validators.maxLength(100),Validators.minLength(10)]],
    expiration_date:[null]
  });

  task:TaskInterface ={
    id_Task: '0',
    title: "",
    description: "",
    expiration_date: new Date(),
    state: false,
    id_User: '0'
  };

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
    if(this.token == ""){
      this.rooter.navigateByUrl('');
    }
    if(!this.rooter.url.includes('edit')) {
      this.editTask = false;
      this.task.expiration_date = null;
      return;
    }
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.taskService.getTaskById(id))
    ).subscribe(response =>
      {
        this.task = response
        console.log(this.task);
        this.statusForm = this.task.state;
        console.log(this.statusForm);
      },
      error => {
        this.showSnackBar(error.error == null? "Invalid token, please log in again." : error.error.message ,"Close");
        if(error.error == null){
          this.cookieService.delete('token',"/");
          this.cookieService.delete("username","/");
         this.rooter.navigateByUrl('');
        }
        else {
          this.rooter.navigateByUrl('task/list');
        }
      }
    );
    this.editTask = true;
  }

  create(){
    if(this.taskForm.valid){
      //date moment(this.taskForm.value.expiration_date).format("YYYY-MM-DD")
     this.task = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        expiration_date: this.taskForm.value.expiration_date,
        state: this.statusForm,
        id_User: undefined
      }
      this.taskService.createTask(this.task).subscribe({
        next:(response) => {
          this.showSnackBar("Task created successfully","Close");
          this.rooter.navigateByUrl('task/list');
          console.log(response);
        },
        error:(error) => {
          this.showSnackBar(error.error == null? "Invalid token, please log in again." : error.error.message ,"Close");
          if(error.error == null){
            this.cookieService.delete('token',"/");
            this.cookieService.delete("username","/");
            this.rooter.navigateByUrl('');
          }
          console.log(error);
        }
      });
    }
  }

  update(){
    if(this.taskForm.valid){
      //date moment(this.taskForm.value.expiration_date).format("YYYY-MM-DD")
      this.task = {
        id_Task: this.task.id_Task,
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        expiration_date: this.taskForm.value.expiration_date,
        state: this.statusForm,
        id_User: this.task.id_User
      }
      //console.log(this.task);
      this.taskService.updateTask(this.task).subscribe({
        next:(response) => {
          this.showSnackBar("Task updated successfully","Close");
          this.rooter.navigateByUrl('task/list');
        },
        error:(error) => {
          this.showSnackBar(error.error == null ? "Invalid token, please log in again." : error.error.message,"Close");
          if(error.error == null){
            this.cookieService.delete('token',"/");
            this.cookieService.delete("username","/");
            this.rooter.navigateByUrl('');
          }
          console.log(error);
        }
      });
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

  setStatus(){
    this.statusForm = !this.statusForm;
    console.log(this.statusForm)
  }

  removeDate(){
    this.taskForm.get('expiration_date')?.setValue(null);
  }
}
