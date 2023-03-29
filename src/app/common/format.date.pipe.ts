import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {DateAdapter} from "@angular/material/core";

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('es-ES');
  }

  transform(date:Date| null | undefined): string {
    if(date){
      return moment(date).format('DD/MM/YYYY');
    }
    return "";
  }

}
