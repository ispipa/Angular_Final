import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';


// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
//{
//       mirror: true,
//       once: false,
//     }

  ngOnInit() {
    AOS.init();
    AOS.refresh();
  }

}
