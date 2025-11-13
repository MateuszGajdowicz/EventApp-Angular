import { Component, effect, inject, input, signal } from '@angular/core';
import { eventType } from '../../../modules/event.module';
import { eventsListService } from '../../../services/eventsList.service';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
@Component({
  selector: 'app-single-event',
  imports: [FormsModule, CommentComponent, AddCommentComponent],
  templateUrl: './single-event.component.html',
  styleUrl: './single-event.component.css',
})
export class SingleEventComponent {
  eventListService = inject(eventsListService);
  event = input<eventType>();
  selectValue = signal<string>('unwilling');

  areCommentsDisplayed = signal<boolean>(false);

  isAddCommentDisplayed = signal<boolean>(false);

  constructor() {
    effect(() => {
      const event = this.event();
      if (!event) return;

      if (event.status !== this.selectValue()) {
        this.onUpdateEventStatus(event, this.selectValue());
      }
    });
  }

  ChangeAddCommentDisplayed() {
    this.isAddCommentDisplayed.update((prev) => !prev);
  }

  changeCommentsDisplay() {
    this.areCommentsDisplayed.update((prev) => !prev);
  }

  onUpdateEventStatus(event: eventType, newStatus: any) {
    this.eventListService.updateEventStatus(event, newStatus);
  }
}
