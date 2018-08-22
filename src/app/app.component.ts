import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Card Application';
  cards = [1, 2, 3, 4];
  selectedCard = 0;

  selectCard (card) {
    this.selectedCard = card;
  }
}
