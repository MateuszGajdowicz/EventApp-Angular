import {
  Component,
  inject,
  input,
  output,
  signal,
  computed,
  Input,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { eventsListService } from '../../services/eventsList.service';

@Component({
  selector: 'app-name-input',
  imports: [FormsModule],
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.css',
})
export class NameInputComponent {
  eventListService = inject(eventsListService);
  nameGiven = signal<string>('');
  @Input() isNameGiven: WritableSignal<boolean> = signal(false);

  getUserName() {
    if (this.nameGiven() !== '') {
      this.eventListService.userName.set(this.nameGiven());
      this.isNameGiven.set(true);
    }
  }
}
