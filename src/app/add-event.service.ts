import { Injectable } from '@angular/core';
import { IEvent } from './IEvent.interface';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {
  private events = new Map<string, IEvent[]>();

  constructor() { }

  addNewEvent(event: IEvent): void {
    if (this.events.has(event.date)) {
      this.events.get(event.date).push(event);
    } else {
      this.events.set(event.date, [event]);
    }
  }

  getMyEvents(date: string): IEvent[] {
    return this.events.get(date);
  }
}
