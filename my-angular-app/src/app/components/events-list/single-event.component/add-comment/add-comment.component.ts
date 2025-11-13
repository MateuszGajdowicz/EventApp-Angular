import { Component, signal, input, inject, Input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { eventType } from '../../../../modules/event.module';
import { eventsListService } from '../../../../services/eventsList.service';

@Component({
  selector: 'app-add-comment',
  imports: [FormsModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  eventsListService = inject(eventsListService);
  event = input<eventType>();
  commentValue = signal<string>('');
  @Input() areCommentsDisplayed: WritableSignal<boolean> = signal(false);
  @Input() isAddCommentDisplayed: WritableSignal<boolean> = signal(false);

  onAddComment() {
    const event = this.event();
    if (!event) return;
    this.eventsListService.addComment(this.commentValue(), event.id);
    this.commentValue.set('');
    this.areCommentsDisplayed.set(true);
  }
}
