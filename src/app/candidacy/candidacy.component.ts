import { Component, OnInit } from '@angular/core';
import { CandidacyService } from '../shared/candidacy.service';
import { Candidacy } from '../class/candidacy';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-candidacy',
  templateUrl: './candidacy.component.html',
  styleUrls: ['./candidacy.component.css']
})
export class CandidacyComponent implements OnInit  {
  listCandidacy:any;
  form : boolean = true;
  candidacy! : Candidacy;
  constructor(private candidacyService: CandidacyService) { }
  ngOnInit(): void {
    this.getAllCandidacy();
      this.candidacy = {
      candidatureId:null,
      CoverLettre:null,
      attachements:null,
      B2Eng:null,
      B2Fr:null,
      option:null,
      levelEng:null,
      levelFr:null,
      status:null,
      marks:null,
      archive:null,
      offerId:null,
      userId:null
    }
  }
  getAllCandidacy() {
    this.candidacyService.getAllCandidacy().subscribe((res:any) => this.listCandidacy = res)
  }
  addCandidacy(c: any){
    this.candidacyService.addCandidacy(c).subscribe(() => {
      this.getAllCandidacy();
      this.form = false;
    });
  }
}
