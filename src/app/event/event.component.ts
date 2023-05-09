import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Event } from '../class/event';
import { Interview } from '../class/interview';
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
  interview!:Interview;
  ListEvent : any;
  form : boolean =true;
  event!: Event;
  closeResult! : string;
  role:string | undefined;

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
    eventsSet: this.handleEvents.bind(this),

    eventRender: function(info:any) {
      console.log('eventRender called:', info.event);
      if (info.event.url) {
        const link = document.createElement('a');
        link.setAttribute('href', info.event.url);
        link.setAttribute('target', '_blank');
        link.innerText = info.event.title;
        const titleEl = info.el.querySelector('.fc-title');
        titleEl.innerHTML = '';
        titleEl.appendChild(link);
      }
    }
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
    this.role = ""+sessionStorage.getItem("Role");
  }

  affichertoutEvent() {
    this.eventService.affichertoutEvent().subscribe((res:any) => {
      this.ListEvent = res;
      // Map event data to the required format
      const events = res.map((event: any) => ({
        title: event.title,
        start: event.start,
        end: event.end,
        url:event.interview.link
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
