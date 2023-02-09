import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  fd:any=[];
  data:any=[];
  row_list:any=[];
  p: number = 1;

  constructor(){}

  load_all_count()
{}

}
