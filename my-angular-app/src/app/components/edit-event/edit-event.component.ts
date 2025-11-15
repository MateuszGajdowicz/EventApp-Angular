import { Component, inject, effect } from '@angular/core';
import { eventsListService } from '../../services/eventsList.service';
import { FormsModule } from '@angular/forms';
import { eventType } from '../../modules/event.module';

@Component({
  selector: 'app-edit-event',
  imports: [FormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css',
})
export class EditEventComponent {
  eventsListService = inject(eventsListService);

  selectedEditedEvent = this.eventsListService.selectedEditEvent;

  editedEventValues: eventType | undefined;

  constructor() {
    effect(() => {
      const ev = this.selectedEditedEvent();
      if (ev) {
        this.editedEventValues = { ...ev };
      } else {
        this.editedEventValues = undefined;
      }
    });
  }

  onEditEvent() {
    this.eventsListService.editEvent(this.editedEventValues!);
  }
}
