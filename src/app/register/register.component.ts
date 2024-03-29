import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from "../auth/signup-info";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {first} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { UserService } from '../shared/user.service';
import { User } from '../class/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  listUsers: any;
  form : boolean = true;
  user!:User;
  closeResult! : string;
  constructor(private userService : UserService ) { }

  ngOnInit(): void {

    this.getAllUsers();
    this.user = {
      user_Id:null,
      firstName:null,
      lastName:null,
      dateNaissance:null,
      phone:null,
      email:null,
      password:null,
      cin:null,
      adresse:null,
      sexe:null,
      image:null,
      alumni:null,
      enabled:null,
      roles:null,
      postSet:null,
      candidacySet:null,
      commentSet:null,
      blogSet:null,
      reportSet:null,
      userFavOffers:null,
      userLikes:null,
      userDislikes:null,
      reponseReports:null,
      universities:null,
    }
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(res => this.listUsers = res)
  }

  register(u: any )
  {
    this.userService.register(u).subscribe(() => {
      this.getAllUsers();
      this.form = false ;
    });

  }

  deleteUser(idUser : any){
    return this.userService.deleteUser(idUser).subscribe(() => this.getAllUsers())
  }

}
