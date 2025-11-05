import { Injectable } from '@angular/core';
import { eventType } from '../modules/event.module';

@Injectable({ providedIn: 'root' })
export class eventsListService {
  eventsList: eventType[] = [
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
  ];
  addEvent(newEvent: eventType) {
    this.eventsList.unshift(newEvent);
  }

  updateEventStatus(event: eventType, newStatus: 'willing' | 'interested' | 'unwilling') {
    event!.status = newStatus;
    console.log(event);
  }
}
