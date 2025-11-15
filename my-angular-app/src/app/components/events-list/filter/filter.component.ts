import { Component, inject, signal } from '@angular/core';
import { eventsListService } from '../../../services/eventsList.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  eventListService = inject(eventsListService);
  filters = {
    title: '',
    minPeople: null,
    maxPeople: null,
    location: '',
    type: 'All',
  };
  buttonValue = signal<string>('Stworzone przez ciebie');
  onFilterByTitle(value: string) {
    this.eventListService.filterByTitle(value);
  }
  onFilterByCapacity(minValue: number | null, maxValue: number | null) {
    if (minValue !== null && maxValue !== null) {
      this.eventListService.filterByCapacity(minValue, maxValue);
    }
  }
  onFilterByLocation(value: string) {
    this.eventListService.filterByLocation(value);
  }
  onFilterByType(value: string) {
    this.eventListService.filterByType(value);
  }
  OnFilterYourEvents() {
    if (this.buttonValue() === 'Wszystkie') {
      this.eventListService.eventsList.set(this.eventListService.allEvents());
      this.buttonValue.set('Stworzone przez ciebie');
    } else {
      this.eventListService.filterYourEvents();
      this.buttonValue.set('Wszystkie');
    }
  }
  onClearFilters() {
    this.eventListService.ClearFilters();
    this.filters = {
      title: '',
      minPeople: null,
      maxPeople: null,
      location: '',
      type: 'All',
    };
    this.buttonValue.set('Stworzone dla ciebie');
  }
}
