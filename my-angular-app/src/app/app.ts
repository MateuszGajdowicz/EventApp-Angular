import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { NameInputComponent } from './components/name-input.component/name-input.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, EventsListComponent, AddEventComponent, NameInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');

  isNameGiven = signal<boolean>(true);

  userName = signal<string>('');

  setUsername(value: string) {
    this.isNameGiven.set(true);
    this.userName.set(value);
  }
}
