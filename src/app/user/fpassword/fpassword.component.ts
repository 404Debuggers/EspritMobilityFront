import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {

  forgetPasswordData = {} as any;
  formForgetPassword : boolean =true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  forgetPassword(){
    this.userService.forgetPassword(this.forgetPasswordData.email).subscribe(
      data => {alert("forgot password email has been sent")},
      error => {alert('You have already asked for forgotten password !!')}

    );

  }

}
