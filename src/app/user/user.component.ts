import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../class/user";
import {GenderOption} from "../class/genderOption";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers: any;
  form : boolean = true;
  user!:User;
  closeResult! : string;

  genderOptions: {value: string, label: string}[] = [];
  constructor(private userService : UserService ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.genderOptions = Object.values(GenderOption).map(value => ({ value, label: value === GenderOption.MALE ? 'HOMME' : 'FEMME' }));
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
      this.form = false;


    });

  }

  deleteUser(userId : any){
     this.userService.deleteUser(userId).subscribe((res:any) => this.getAllUsers())

  }



}
