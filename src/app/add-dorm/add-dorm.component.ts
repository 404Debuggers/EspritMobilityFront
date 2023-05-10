import { Component, OnInit } from '@angular/core';
import { DormitoriesService } from '../shared/dormitories.service';
import { Router } from '@angular/router';
import { Dormitories } from '../class/dormitories';

@Component({
  selector: 'app-add-dorm',
  templateUrl: './add-dorm.component.html',
  styleUrls: ['./add-dorm.component.css']
})
export class AddDormComponent implements OnInit {

  dormitories : Dormitories = new Dormitories();

  idUniversity : any;

  universities : any;

  constructor(private dormService : DormitoriesService,private router: Router) { }

  addDorm(){
    this.dormService.AddDorm(this.dormitories , this.idUniversity).subscribe();
    this.router.navigate(['dormitories']);

  }

  getAllUniversities(){
    this.dormService.GetAllUniversities().subscribe(data =>{
      this.universities = data
    });
  }

  ngOnInit(): void {
    this.getAllUniversities();
  }


}
