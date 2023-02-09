import { Component } from '@angular/core';
import { FormControl,FormGroup,FormControlName,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})

export class LoginpageComponent {
  title = 'Login Form';
  loginform = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  get username()
  {
    return this.loginform.get('username');
  }

  loginuser()
  {
    console.log(this.loginform.value);
  }

  next(){
    // this.router.navigate(['/home/dashboard']);
    // this.router.navigateByUrl('/home');
  }
  public inputType: string = 'password';

  constructor(
    private router:Router,
  ) { }

  public showPassword() {
    // (this.inputType === 'password') ? this.inputType = 'text' : this.inputType = 'password';

    if (this.inputType === 'password') {
      this.inputType = 'text';
    }
    else {
      this.inputType = 'password';
    }
  }

}
