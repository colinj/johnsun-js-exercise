import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String = 'My Card Application';
  cards: Array<Number> = [1, 2, 3, 4];
  selectedCard: Number = 0;

  selectCard (card: Number) {
    this.selectedCard = card;
  }
}
