import { Component, inject, signal, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { eventsListService } from '../../services/eventsList.service';
import { Title } from '@angular/platform-browser';
import { EventType, eventType } from '../../modules/event.module';

@Component({
  selector: 'app-add-event',
  imports: [FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent {
  eventListService = inject(eventsListService);

  newEventTitle = signal<string>('');
  newEventDescription = signal<string>('');
  newEventLocation = signal<string>('');
  newEventType = signal<EventType>('concert');
  newEventCapacity = signal<number>(0);

  newEvent: eventType | null = null;

  username = input<string>('');

  onAddNewEvent() {
    this.newEvent = {
      id: Math.floor(Math.random() * 1000),
      title: this.newEventTitle(),
      description: this.newEventDescription(),
      host: this.username(),
      location: this.newEventLocation(),
      type: this.newEventType(),
      capacity: this.newEventCapacity(),
      status: 'owner',
      currentMembers: 1,
    };
    this.eventListService.addNewEvent(this.newEvent);
    console.log(this.newEvent);
  }
}
