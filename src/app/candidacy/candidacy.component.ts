import { Component, OnInit } from '@angular/core';
import { CandidacyService } from '../shared/candidacy.service';

@Component({
  selector: 'app-candidacy',
  templateUrl: './candidacy.component.html',
  styleUrls: ['./candidacy.component.css']
})
export class CandidacyComponent implements OnInit {
  listCandidacy!: string[];
  constructor(private _service:CandidacyService) { }

  ngOnInit(): void {
    this._service.getAllCandidacy().subscribe(res=>{console.log(res);
      this.listCandidacy=res});
  }

}
