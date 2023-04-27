import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidacy } from '../class/candidacy';
import { CandidacyService } from '../shared/candidacy.service';
import { OfferService } from '../shared/offer.service';
import { Offer } from '../class/offer';
@Component({
  selector: 'app-add-candidacy',
  templateUrl: './add-candidacy.component.html',
  styleUrls: ['./add-candidacy.component.css']
})
export class AddCandidacyComponent implements OnInit {
  form : boolean = true;
  candidacy! : Candidacy;
  offer!: Offer;
  listCandidacy:any;
  offerId: number | null = null;
  attachments!: File;
  B2Fr!: File;
  B2Eng!: File;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private candidacyService: CandidacyService,
    private offerService: OfferService) {}

  ngOnInit(): void {
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
    title:null,
  }
  this.route.params.subscribe(params => {
    this.offerId = +params['id'];
  });
  const offerId = this.route.snapshot.params['offerId'];
  this.offerService.getOfferById(offerId).subscribe((offer) => {
    this.offer = offer;
  });

  //   this.route.params.subscribe(params => {
  //     console.log("hhhhhhhhhh");
  //     const id = params['id'];
  //     // Use the offerId to execute the desired function
  //     console.log("hhhhhhhhhh");
  // });
  // this.route.params.subscribe(params => {
  //   this.offerId = params['id'];
  // });
  }
  onFileSelected(event: any, fileType: string) {
    const file: File = event.target.files[0];
    if (fileType === 'attachment') {
      this.attachments = file;
    } else if (fileType === 'b2Francais') {
      this.B2Fr = file;
    } else if (fileType === 'b2Anglais') {
      this.B2Eng = file;
    }
  }
  // addCandidacy(c: any){
  //   console.log(c.offerId); // add this line to check the value of offerId
  //   this.candidacyService.addCandidacy(c).subscribe(() => {
  //     this.getAllCandidacy();
  //     this.form = false;
  //   });
  // }
  addCandidacy() {
    const formData: FormData = new FormData();
    formData.append('candidacy', JSON.stringify(this.candidacy));
    formData.append('attachments', this.attachments);
    formData.append('B2Fr', this.B2Fr);
    formData.append('B2Eng', this.B2Eng);
    this.candidacyService.addCandidacy(this.candidacy, this.attachments, this.B2Fr, this.B2Eng).subscribe(() => {
      console.log('Candidacy added successfully.');
      this.router.navigate(['/']);
    }, error => {
      console.log('An error occurred while adding the candidacy: ', error);
    });
  }


}
