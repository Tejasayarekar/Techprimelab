import { Component, OnInit} from '@angular/core';


declare const row_filter:any;

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {
  data:any=[]
  p: number = 1;

  constructor(){}
  ngOnInit(): void {

    row_filter("table_rc","search");
}

  page_change(){

  }

start(id:any){}
close(id:any){}
cancel(id:any){}

}
