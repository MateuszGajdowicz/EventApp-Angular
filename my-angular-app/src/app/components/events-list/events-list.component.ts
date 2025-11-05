import { Component, inject } from '@angular/core';
import { eventsListService } from '../../services/eventsList.service';
import { SingleEventComponent } from './single-event.component/single-event.component';
import { eventType } from '../../modules/event.module';

@Component({
  selector: 'app-events-list',
  imports: [SingleEventComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
})
export class EventsListComponent {
  eventListService = inject(eventsListService);

  eventsList: eventType[] = this.eventListService.eventsList;
}
