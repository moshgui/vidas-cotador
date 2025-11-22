import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-plano',
  imports: [],
  templateUrl: './seletor-plano.html',
  styleUrl: './seletor-plano.css',
})
export class SeletorPlano {
  @Input() nomeCliente: string = '';
  @Input() faixaEtaria = '';
  @Input() nomePlano: string = '';
  @Input() tipoPlano: string = '';
  @Input() valorPlanoInteiro = '';
  @Input() featuresPlano = '';
  @Input() valorPlanoDecimal = '';
}
