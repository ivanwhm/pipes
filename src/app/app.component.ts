import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;

  onNameChange(newName: string): void {
    this.name = newName;
  }

  onDateChange(newDate: string): void {
    this.date = newDate;
  }

  onAmountChange(newAmount: string): void {
    this.amount = parseFloat(newAmount);
  }
}
