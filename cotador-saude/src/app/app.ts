import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSeletorPessoa } from "./card-seletor-pessoa/card-seletor-pessoa";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardSeletorPessoa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cotador-saude');
}
