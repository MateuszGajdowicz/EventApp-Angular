import { Component, effect, inject, signal, input } from '@angular/core';
import { eventsListService } from '../../services/eventsList.service';
import { SingleEventComponent } from './single-event.component/single-event.component';
import { eventType } from '../../modules/event.module';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-events-list',
  imports: [SingleEventComponent, FilterComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
})
export class EventsListComponent {
  eventListService = inject(eventsListService);

  eventsList = this.eventListService.eventsList;

  isAddNewEventDisplayed = this.eventListService.isAddNewEventDisplayed;
}
