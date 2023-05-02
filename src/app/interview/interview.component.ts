import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Interview } from '../class/interview';
import { InterviewService } from '../shared/interview.service';
import { CandidacyService } from '../shared/candidacy.service';
import { Candidacy } from '../class/candidacy';
import { University } from '../class/university';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit {
  @ViewChild('interviewform') interviewform!: NgForm;
  allInterviews: Interview[] = [];
  ListInterview: Interview[] = [];
  listCandidacy: any;
  x: any;
  currentInterview: any;
  form: boolean = true;
  interview!: Interview;
  candidacy!: Candidacy;
  university!: University;
  closeResult!: string;
  editMode: boolean = false;
  id: any;
  ListEvent : any;

  constructor(
    private interviewService: InterviewService,
    private candidacyService: CandidacyService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.affichertoutentretien();
    this.affichertoutEvent()

    this.interview = {
      interviewId: null,
      link: null,
      archive: null,
      candidatureId: null,
      universityId: null,
      eventDate: null,
      candidacy: this.candidacy,
    };
    this.getAllCandidacy();
    this.candidacy = {
      candidatureId: null,
      CoverLettre: null,
      attachements: null,
      B2Eng: null,
      B2Fr: null,
      option: null,
      levelEng: null,
      levelFr: null,
      status: null,
      marks: null,
      archive: null,
      offerId: null,
      userId: null,
    };
  }

  affichertoutEvent() {
    this.eventService
      .affichertoutEvent()
      .subscribe((res: any) => (this.ListEvent = res));
  }
  affichertoutentretien() {
    this.interviewService
      .affichertoutentretien()
      .subscribe((res: any) => (this.ListInterview = res));

      console.log(this.ListEvent)
  }
  switch () {
    this.editMode = false
    this.interview = {
      interviewId: null,
      link: null,
      archive: null,
      candidatureId: null,
      universityId: null,
      eventDate: null,
      candidacy: this.candidacy,
    };
  }
  createEntretien(interview: any) {
    console.log(interview);
    // cast to int
    if (!this.editMode) {
      interview.archive = +interview.archive;
      const test = this.interviewService
        .createEntretien(interview)
        .subscribe(() => {
          // update ListInterview with the new interview
          this.interviewService
            .affichertoutentretien()
            .subscribe((res: any) => {
              this.ListInterview = res;
            });
        });
    } else {
      delete interview.interviewId;
      interview.eventDate = new Date(interview.eventDate);
      this.interviewService
        .modifierrentretienne(interview, this.id)
        .subscribe(() => {
          // find the updated interview in ListInterview and replace it with the updated version
          const index = this.ListInterview.findIndex(
            (i: any) => i.interviewId === this.id
          );
          this.ListInterview[index] = interview;
        });
    }
  }
  supprimerentretien(interviewId: any) {
    this.interviewService.supprimerentretien(interviewId).subscribe(() => {
      this.affichertoutentretien();
    });
  }
  getAllCandidacy() {
    this.candidacyService
      .getAllCandidacy()
      .subscribe((res: any) => (this.listCandidacy = [{ candidatureId: 1 }]));
  }

  OnEditClicked(id: any) {
    let currentInterview = this.ListInterview.find((p) => {
      return p.interviewId === id;
    });
    this.id = id;
    // get the date from the ListEvents
    let eventDate = this.ListEvent.find((p : any) => {
      return p.interview.interviewId === id;
    });
    this.interviewform.form.patchValue({
      archive: currentInterview?.archive,
      link: currentInterview?.link,
      candidatureId: currentInterview?.candidatureId,
      universityId: currentInterview?.universityId,
      eventDate: eventDate?.start,
      candidacy: currentInterview?.candidacy,
    });

    this.editMode = true;
  }
}
