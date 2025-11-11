import { Injectable, signal } from '@angular/core';
import { eventType } from '../modules/event.module';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class eventsListService {
  // Oryginalne eventy (nie zmieniane, baza danych)
  allEvents = signal<eventType[]>([
    {
      id: 1,
      title: 'Angular Meetup PW',
      description:
        'Spotkanie fanów Angulara na Politechnice Warszawskiej. Prezentacje, networking i mini warsztaty.',
      host: 'Jan Kowalski',
      location: 'Politechnika Warszawska, Warszawa',
      type: 'meetup',
      tags: ['Angular', 'Frontend', 'Tech'],
      capacity: 50,
      status: 'unwilling',
      currentMembers: 0,
      comments: [
        { id: 1, date: '2025-11-01T18:30:00', user: 'Adam', content: 'Super inicjatywa!' },
        { id: 2, date: '2025-11-02T09:15:00', user: 'Ewa', content: 'Nie mogę się doczekać!' },
      ],
    },
    {
      id: 2,
      title: 'Koncert Jazzowy w Parku',
      description: 'Wieczorny koncert jazzowy pod gołym niebem w centrum Warszawy.',
      host: 'Anna Nowak',
      location: 'Park Saski, Warszawa',
      type: 'concert',
      tags: ['Jazz', 'Muzyka', 'Plener'],
      capacity: 200,
      status: 'unwilling',
      currentMembers: 0,
      comments: [
        {
          id: 3,
          date: '2025-11-03T20:00:00',
          user: 'Krzysztof',
          content: 'Idealny pomysł na sobotni wieczór!',
        },
      ],
    },
    {
      id: 3,
      title: 'Warsztat Python dla Początkujących',
      description: '3-godzinny warsztat wprowadzający w świat Pythona i automatyzacji.',
      host: 'Michał Wiśniewski',
      location: 'Coworking Hub, Warszawa',
      type: 'workshop',
      tags: ['Python', 'Programowanie', 'Warsztat'],
      capacity: 25,
      status: 'unwilling',
      currentMembers: 0,
      comments: [],
    },
    {
      id: 4,
      title: 'Impreza Integracyjna dla Studentów',
      description: 'Wieczór gier, muzyki i networking dla studentów kierunków technicznych.',
      host: 'Karolina Mazur',
      location: 'Klub Studencki, Warszawa',
      type: 'party',
      tags: ['Studenci', 'Gry', 'Muzyka'],
      capacity: 100,
      status: 'unwilling',
      currentMembers: 0,
      comments: [
        { id: 4, date: '2025-11-04T19:00:00', user: 'Marta', content: 'Kto idzie razem?' },
      ],
    },
    {
      id: 5,
      title: 'Turniej Piłki Nożnej',
      description: 'Amatorski turniej piłki nożnej dla wszystkich chętnych drużyn.',
      host: 'Piotr Nowicki',
      location: 'Boisko MOSiR, Warszawa',
      type: 'sport',
      tags: ['Sport', 'Piłka Nożna', 'Turniej'],
      capacity: 16,
      status: 'unwilling',
      currentMembers: 0,
      comments: [],
    },
  ]);

  eventsList = signal<eventType[]>([...this.allEvents()]);

  updateEventStatus(event: eventType, newStatus: 'willing' | 'interested' | 'unwilling' | 'owner') {
    this.eventsList.update((events) =>
      events.map((e) => (e.id === event.id ? { ...e, status: newStatus } : e))
    );
  }

  addNewEvent(newEvent: eventType) {
    this.eventsList.update((events) => [newEvent, ...events]);
  }

  filterByTitle(value: string) {
    const search = value.toLowerCase().trim();

    const filtered = this.allEvents().filter((event) => event.title.toLowerCase().includes(search));

    this.eventsList.set(filtered);
    console.log('Filtered events:', filtered);
  }

  filterByCapacity(minValue: number | null, maxValue: number | null) {
    if (minValue !== null && maxValue !== null) {
      const filtered = this.allEvents().filter(
        (element) => element.capacity >= minValue && element.capacity <= maxValue
      );
      this.eventsList.set(filtered);
    }
    // this.eventsList.set([...this.allEvents()]);
  }

  filterByLocation(value: string) {
    let search = value.toLowerCase().trim();
    const filtered = this.allEvents().filter((element) =>
      element.location.toLowerCase().includes(search)
    );
    this.eventsList.set(filtered);
  }

  filterByType(value: string) {
    let filtered = this.allEvents().filter((element) => element.type === value);
    this.eventsList.set(filtered);
  }
}
