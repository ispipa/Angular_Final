import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserInterface} from "../../../../../interfaces/user";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../../../core/services/user.service";
import {CookieService} from "ngx-cookie-service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rooter:Router,private formBuilder:FormBuilder,private userService:UserService,private cookieService: CookieService,
  private snackBar:MatSnackBar) { }

  userForm = this.formBuilder.group({
    email:["",[Validators.required,Validators.email,Validators.maxLength(50)]],
    password:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
  });

  User!:UserInterface;




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
    this.rooter.navigateByUrl('/register');
  }

  login(){
    if(this.userForm.valid){
      this.User = {
        email: this.userForm.value.email,
        password: this.userForm.value.password
      }
      this.userService.login(this.User).subscribe({
        next:(response) => {
          //token accessToken
          console.log("Response is ",response);
          this.User.accessToken = response.accessToken;
          this.User.username = response.username;
          this.setCookie();
        },
        error:(error) => {
          console.log("Error is ",error);
          this.showSnackBar("User does not exist in our system","Close");
        }
      })
      console.log('Form data is ',this.User);
    }
  }

  setCookie(){
    if (this.User.accessToken != null) {
      this.cookieService.set('token', this.User.accessToken, {
        path: '/',
        expires: new Date((new Date()).getTime() + 86400000)
      });
    }
    if(this.User.username != null){
      this.cookieService.set('username', this.User.username,{
        path: '/',
        expires: new Date((new Date()).getTime() + 86400000)
      })
      this.rooter.navigateByUrl('task');
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
