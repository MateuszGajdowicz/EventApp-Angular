import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  imports: [FormsModule],
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.css',
})
export class NameInputComponent {
  nameGiven = signal<string>('');

  nameGivenEmit = output<string>();

  EmitNameGiven() {
    if (this.nameGiven() !== '') {
      this.nameGivenEmit.emit(this.nameGiven());
    }
  }
}
