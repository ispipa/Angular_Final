import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {UserInterface} from "../../../../../interfaces/user";
import {UserService} from "../../../../../core/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {colors} from "@angular/cli/utilities/color";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rooter:Router,private formBuilder:FormBuilder,private userService:UserService,
              private snackBar:MatSnackBar,private cookieService: CookieService) { }

  userForm = this.formBuilder.group({
    username:["",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
    email:["",[Validators.required,Validators.email,Validators.maxLength(50)]],
    password:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
  });

  user!:UserInterface;

  errorMessage!:string;

  ngOnInit(): void {
    let token = this.cookieService.get('token');
    if(token != ""){
      this.rooter.navigateByUrl('task/list');
    }
    else {
      this.cookieService.delete('token',"/");
      this.cookieService.delete('username',"/");
    }
  }

  redirect(){
    this.rooter.navigateByUrl('');
  }
  register(){
    if(this.userForm.valid){
      this.user={
        username:this.userForm.value.username,
        email:this.userForm.value.email,
        password:this.userForm.value.password,
        role:["user"]
      }
      this.userService.register(this.user).subscribe({
        next:(response) => {
          this.rooter.navigateByUrl('');
        },
        error:(error) => {
          this.errorMessage = error.error.message;
          this.showSnackBar(this.errorMessage,"Close");
          console.log(this.errorMessage)
        }
      })
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
