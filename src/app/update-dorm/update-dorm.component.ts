import { Component, OnInit } from '@angular/core';
import { DormitoriesService } from '../shared/dormitories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-dorm',
  templateUrl: './update-dorm.component.html',
  styleUrls: ['./update-dorm.component.css']
})
export class UpdateDormComponent implements OnInit {

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
       this.idDorm = params['id'];
     })


    this.getAllUniversities();

    this.dormService.GetByIDDorm(this.idDorm).subscribe(data =>{
      this.dormitories = data
    });

  }

dormitories : any;
universities : any;
idUniversity : any;
idDorm : any;
universityName : any;
selecteddormId: number | undefined;

  constructor(private dormService : DormitoriesService,private router : Router, private route:ActivatedRoute ) { }


  getAllUniversities(){
    this.dormService.GetAllUniversities().subscribe(data =>{
      this.universities = data
    });
  }

  updateDorm(){
    this.dormService.updateDormroom(this.dormitories).subscribe();
    this.router.navigate(['dormitories']);
  }

}
