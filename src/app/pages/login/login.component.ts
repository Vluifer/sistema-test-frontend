import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any;

  ngOnInit(): void {
    this.loginData = {
      "username":'',
      "password":''
    }
  }

  constructor(private snacK:MatSnackBar, private loginService: LoginService ){}

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snacK.open("El campo usuario es requerido*", "aceptar",{
        duration:3000
      });
      return
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snacK.open("El campo password es requerido*", "aceptar",{
        duration:3000
      });
    }

    this.loginService.generateToken(this.loginData).subscribe(
    (data:any)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    }
    )
  }
}
