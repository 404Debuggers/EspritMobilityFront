import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";
import {User} from "../../class/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html', styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser!: User;
  updatedUser!: User;

  profileForm : boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('Token') || 'default_token';

    this.userService.getUserFromToken(token).subscribe(
      (data) => {
        this.currentUser = data;
        this.updatedUser = Object.assign({}, this.currentUser);
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.updatedUser).subscribe((data) => {
      this.currentUser = data;
      this.updatedUser = Object.assign({}, this.currentUser);
    });
  }
}
