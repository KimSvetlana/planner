import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { AddEventService } from './add-event.service';
import { IEvent } from './IEvent.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'planner';
  myDate: string;
  events: IEvent[] = []

  constructor(private dateAdapter: DateAdapter<Date>,
    public dialog: MatDialog,
    public addEventService: AddEventService) {
    this.dateAdapter.setLocale('en-GB');
    this.updateMyEvents();
  }

  chooseDate(event: MatDatepickerInputEvent<Date>): void {
    this.myDate = event.value.toDateString();
    this.updateMyEvents();
  }

  addNewEvent() {
    const dialogRef = this.dialog.open(AddEventFormComponent, {
      width: '250px',
      data: this.myDate,
    });

    dialogRef.afterClosed().subscribe(newDate => {
      this.updateMyEvents();
    });
  }

  updateMyEvents(): void {
    this.events = this.addEventService.getMyEvents(this.myDate);
  }


}


