import { Component } from '@angular/core';
import { DeckCardComponent } from "../deck-card/deck-card.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [DeckCardComponent, BannerComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {
  redDeck = { title: 'Red Deck Wins', description: 'Mazo enfocado en atacar rápidamente con criaturaspequeñas y lanzar hechizos directos de daño para reducir la vida del oponente rápidamente.', image: 'img/red.png' };
  greenDeck = { title: 'Monogreen Stompy', description: 'Este mazo utiliza criaturas grandes y eficientes para ganar a través de puro poder. Se juega una criatura grande tras otra, abrumando al oponente.', image: 'img/green.png' };
  whiteDeck = { title: 'White Weenie', description: 'Este mazo usa criaturas pequeñas y eficientes para atacar rápidamente, a menudo con habilidades que aumentan el numero o el poder de las criaturas.', image: 'img/white.png' };
  monoBlack = {title: 'Mono Black Control', description: 'Un mazo que se centra en controlar el juego, eliminando las amenazas del oponente y eventualmente ganando con un par de criaturas.', image: 'img/monoBlack.png'};
  azorius = {title: 'Azorius Flyers', description: 'Este mazo se basa en criaturas voladoras, que pueden evadir a muchas criaturas que no pueden bloquearlas. Las criaturas voladoras suelen ser más difíciles de manejar.', image: 'img/azorius.png'};
  bandCompany = {title:'Bant Company', description: 'Este mazo combina las mejores cartas de los colores blanco, azul y verde. La estrategia es tener muchas criaturas en el campo para abrumar al oponente y tener opciones para responder a su juego.', image: 'img/bandCompany.png'};
  monoRed = {title:'Mono Red Burn',  description:'imilar al Monored Aggro, este mazo se enfoca en infligir daño directo al oponente a través de hechizos en lugar de depender principalmente de criaturas.', image: 'img/monoRed.png'};
  dredge = {title:'Dredge', description: 'Este mazo se basa en la habilidad "dredge", que te permite devolver cartas del cementerio a la mano en lugar de robar. Se enfoca en crear un ciclo de juego constante donde siempre tienes recursos disponibles para jugar.', image: 'img/dredge.png'};
  jundMidrange = {title:'Jund Midrange', description:'Este mazo combina cartas de negro, rojo y verde. Se enfoca en el equilibrio entre criaturas y hechizos de control. Utiliza criaturas poderosas y eficaces junto con cartas que eliminan amenazas.', image: 'img/jundMidrange.png'};
  tron = {title:'Tron', description: 'Este mazo busca reunir las tres tierras Urza para generar grandes cantidades de maná y jugar cartas poderosas. Este mazo suele incluir criaturas y planeswalkers de alto coste que pueden ganar el juego por sí solos.', image: 'img/tron.png'}
}
