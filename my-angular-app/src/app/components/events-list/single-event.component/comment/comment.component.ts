import { Component, input } from '@angular/core';
import { commentType, CommentType } from '../../../../modules/event.module';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  comment = input<commentType>();
}
