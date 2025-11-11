import { Component, inject } from '@angular/core';
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
    type: 'Typ',
  };

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
}
