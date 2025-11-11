import { Component, effect, inject, input, signal } from '@angular/core';
import { eventType } from '../../../modules/event.module';
import { eventsListService } from '../../../services/eventsList.service';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
@Component({
  selector: 'app-single-event',
  imports: [FormsModule, CommentComponent],
  templateUrl: './single-event.component.html',
  styleUrl: './single-event.component.css',
})
export class SingleEventComponent {
  eventListService = inject(eventsListService);
  event = input<eventType>();
  selectValue = signal<string>('unwilling');

  areCommentsDisplayed = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (!this.event()) return;
      if (this.event()?.status !== 'owner') {
        this.onUpdateEventStatus(this.event()!, this.selectValue());
      }
    });
  }

  changeCommentsDisplay() {
    this.areCommentsDisplayed.update((prev) => !prev);
  }

  onUpdateEventStatus(event: eventType, newStatus: any) {
    this.eventListService.updateEventStatus(event, newStatus);
  }
}
