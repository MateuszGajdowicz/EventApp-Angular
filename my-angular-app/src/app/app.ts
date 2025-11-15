import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { NameInputComponent } from './components/name-input.component/name-input.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { eventsListService } from './services/eventsList.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    EventsListComponent,
    AddEventComponent,
    NameInputComponent,
    EditEventComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');

  eventsListService = inject(eventsListService);

  selectedEditedEvent = this.eventsListService.selectedEditEvent;

  isAddNewEventDisplayed = this.eventsListService.isAddNewEventDisplayed;

  isNameGiven = signal<boolean>(true);

  userName = signal<string>('BONIFACY');
}
