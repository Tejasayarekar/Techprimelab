import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../datalist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit{

  data:any=[];
  constructor(private d1:DatalistService,
    private router:Router ){}

  ngOnInit(){
    this.data=this.d1.Reason();
    console.log(this.data);
  }

  add(){
    this.router.navigateByUrl('/projectdetails');
  }

  status_change(val:any)
  {
    if(val=="active")
    {
      this.data.active=true;
      this.data.deactive=false;
      this.data.closed=false;
      this.data.sts='active';
    }
    else if(val=="deactive")
    {
      this.data.deactive=true;
      this.data.active=false;
      this.data.closed=false;
      this.data.sts='deactive';
    }else{
      this.data.closed=true;
      this.data.deactive=false;
      this.data.active=false;
      this.data.sts='closed';
    }

  }
}
