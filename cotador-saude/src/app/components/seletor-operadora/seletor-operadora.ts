import { Component, Input } from '@angular/core';
import { Buttons } from '../../shared/buttons/buttons';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seletor-operadora',
  imports: [Buttons, RouterLink, RouterOutlet],
  templateUrl: './seletor-operadora.html',
  styleUrl: './seletor-operadora.css',
})
export class SeletorOperadora {
  @Input() nomeOperadora = '';
  @Input() descricaoOperadora = '';
}
