import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.scss'
})
export class DeckCardComponent {
  @Input() deck: any;
}
