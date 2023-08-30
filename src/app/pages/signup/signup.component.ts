import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


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

  constructor(private userService: UserService, private snack: MatSnackBar){}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El Nombre de usuario es requerido', 'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.userService.agregarUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Usuario Guardado','Usuario Registrado con exito','success')
      },(error) =>{
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar',{
          duration:3000,
        });
      }
    )
  }

}
