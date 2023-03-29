import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isExpanded:boolean = false;

  userName!:string;

  constructor(private cookieService: CookieService,private rooter:Router) { }

  ngOnInit(): void {
    this.userName = this.cookieService.get('username') ? this.cookieService.get('username') : "UserName";
  }

  closeSession(){
    this.cookieService.delete('token',"/");
    this.rooter.navigateByUrl('');
  }

}
