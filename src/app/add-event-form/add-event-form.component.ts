import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEventService } from '../add-event.service';
import { IEvent } from '../IEvent.interface';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {
  newEvent: FormGroup;
  nameControl = new FormControl();
  eventControl = new FormControl();
  budgetControl =  new FormControl();
  adressControl = new FormControl();
  timeControl = new FormControl();
  descriptionControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<AddEventFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public addEventService: AddEventService)
    { 
      this.newEvent = new FormGroup({})
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void{
    let myNewEvent: IEvent = {
      event: this.eventControl.value, 
      date: this.data, 
      name: this.nameControl.value, 
      budget: this.budgetControl.value, 
      adress: this.adressControl.value, 
      time: this.timeControl.value,
      description: this.descriptionControl.value
    }
    this.addEventService.addNewEvent(myNewEvent);
    this.dialogRef.close();
  }  
}
