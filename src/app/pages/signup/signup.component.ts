import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  user: any;
  ngOnInit(): void {
    this.user = {
      username:'',
      password:'',
      nombre: '',
      apellido:'',
      email:'',
      telefono:''
    };
  }

  constructor(private userService: UserService){}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('El nombre de usuario es requerido');
      return;
    }

    this.userService.agregarUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        alert('Usuario guardado con exito');
      },(error) =>{
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )
  }

}
