import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Event } from '../class/event';
import { CalendarOption } from '@fullcalendar/angular/private-types';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';



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

  calendarOptions: CalendarOption<any> = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    events: [], // This will be populated with your events data
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };

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
    this.eventService.affichertoutEvent().subscribe((res:any) => {
      this.ListEvent = res;
      // Map event data to the required format
      const events = res.map((event: any) => ({
        title: event.title,
        start: event.start,
        end: event.end
      }));
      this.calendarOptions.events = events; // Populate events data in calendarOptions
    });
  }

  handleDateClick(arg:any) {
    console.log('date click! ' + arg.dateStr);
  }
  

  handleEventClick(arg:any) {
    console.log('event click! ' + arg.event.title);
  }

  handleEvents(events:any) {
    console.log('events set! ' + events);
  }
}