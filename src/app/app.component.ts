import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;

  onNameChange(newName: string): void {
    this.name = newName;
  }

  onDateChange(newDate: string): void {
    this.date = newDate;
  }
}
