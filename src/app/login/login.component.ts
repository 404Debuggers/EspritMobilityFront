import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../shared/user.service";
import {AuthLoginInfo} from "../auth/login-info";
import {Router} from "@angular/router";
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username : string | undefined;
  password : string | undefined;
  constructor(private userService : UserService , private router: Router) { }




  ngOnInit(): void {
  }

  login()
  {
    let loginForm = new AuthLoginInfo();
    // @ts-ignore
    loginForm.username= this.username;
    // @ts-ignore
    loginForm.password=this.password;


    this.userService.login(loginForm).subscribe(

      (response) =>{
        console.log(response);
        this.router.navigate(['dashboard']);

      },
      (error) => {
        console.log(error);
      }
    )

  }

}
