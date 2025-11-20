import { Component, Input } from '@angular/core';
import { Buttons } from '../../shared/buttons/buttons';

@Component({
  selector: 'app-seletor-operadora',
  imports: [Buttons],
  templateUrl: './seletor-operadora.html',
  styleUrl: './seletor-operadora.css',
})
export class SeletorOperadora {
  @Input() nomeOperadora = '';
  @Input() descricaoOperadora = '';
}
