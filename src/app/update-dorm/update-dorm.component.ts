import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dormitories } from '../class/dormitories';
import { DormitoriesService } from '../shared/dormitories.service';

@Component({
  selector: 'app-update-dorm',
  templateUrl: './update-dorm.component.html',
  styleUrls: ['./update-dorm.component.css']
})
export class UpdateDormComponent implements OnInit {

dormitories : any;
universities : any;
idUniversity : any;
idDorm : any;
universityName : any;

  constructor(private dormService : DormitoriesService,private route : ActivatedRoute) { }

 
  getAllUniversities(){
    this.dormService.GetAllUniversities().subscribe(data =>{
      this.universities = data
    });
  }

  updateDorm(){
    this.dormService.updateDormroom(this.dormitories ,this.idDorm).subscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.idDorm = params['id'];
    })
    this.getAllUniversities();

    this.dormService.GetByIDDorm(this.idDorm).subscribe(data =>{
      this.dormitories = data
    });
  
  }

}
