import { Component, effect, inject, input, signal } from '@angular/core';
import { eventType } from '../../../modules/event.module';
import { eventsListService } from '../../../services/eventsList.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-single-event',
  imports: [FormsModule],
  templateUrl: './single-event.component.html',
  styleUrl: './single-event.component.css',
})
export class SingleEventComponent {
  eventListService = inject(eventsListService);
  event = input<eventType>();
  selectValue = signal<string>('unwilling');
  constructor() {
    effect(() => {
      const currentEvent = this.event();
      if (currentEvent) {
        // tylko jeśli event istnieje
        this.onUpdateEventStatus(currentEvent, this.selectValue());
      }
    });
  }

  onUpdateEventStatus(event: eventType, newStatus: any) {
    this.eventListService.updateEventStatus(event, newStatus);
  }
}
