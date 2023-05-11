import { OfferService } from './../../shared/offer.service';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { User } from 'src/app/class/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  role:string | undefined;
  username:string | undefined
  user_Id:string | undefined
  offers :any | undefined;

  currentUser!: User;
  updatedUser!: User;

  constructor(private router: Router ,private userService : UserService,private OfferService : OfferService) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem('Token') || 'default_token';
     this.role = ""+sessionStorage.getItem("Role");
     this.username = ""+sessionStorage.getItem("Username");
    // console.log(this.username)
     if(this.username == "no"){
       this.router.navigate(['login']);
     }

     this.userService.getUserFromToken(token).subscribe(
      (data) => {
        this.currentUser = data;
        this.updatedUser = Object.assign({}, this.currentUser);
      }
     );

     this.OfferService.getFavOffers().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );

  }

  toogle(){
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }
   singout(){
     sessionStorage.removeItem("Token");
     sessionStorage.removeItem("Role");
     sessionStorage.setItem("Username","no");
  //   //sessionStorage.clear();
     this.router.navigate(['login']);
    }



}
