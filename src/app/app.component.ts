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
  height: number;
  miles: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(newName: string): void {
    this.name = newName;
  }

  onDateChange(newDate: string): void {
    this.date = newDate;
  }

  onAmountChange(newAmount: string): void {
    this.amount = parseFloat(newAmount);
  }

  onHeightChange(newHeight: string): void {
    this.height = parseFloat(newHeight);
  }

  onMilesChange(newMiles: string): void {
    this.miles = parseFloat(newMiles);
  }
}
