import { Component } from '@angular/core';
import { DeckCardComponent } from "../deck-card/deck-card.component";

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [DeckCardComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {
  redDeck = { title: 'Red Deck Wins', description: 'Mazo enfocado en atacar rápidamente con criaturaspequeñas y lanzar hechizos directos de daño para reducir la vida del oponente rápidamente.', image: 'img/red.png' };
  greenDeck = { title: 'Monogreen Stompy', description: 'Este mazo utiliza criaturas grandes y eficientes para ganar a través de puro poder. Se juega una criatura grande tras otra, abrumando al oponente.', image: 'img/green.png' };
  whiteDeck = { title: 'White Weenie', description: 'Este mazo usa criaturas pequeñas y eficientes para atacar rápidamente, a menudo con habilidades que aumentan el numero o el poder de las criaturas.', image: 'img/white.png' };
}
