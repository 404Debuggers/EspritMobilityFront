import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Event } from '../class/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  ListEvent : any;
  form : boolean =true;
  event!: Event;
  closeResult! : string;

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.affichertoutEvent();
    this.event = {
      id:null,
      title:null,
      start:null,
       end:null
  }
}
  affichertoutEvent() {
    this.eventService.affichertoutEvent().subscribe((res:any) => this.ListEvent = res)
  }
}


