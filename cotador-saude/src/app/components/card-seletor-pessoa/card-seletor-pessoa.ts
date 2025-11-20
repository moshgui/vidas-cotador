import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-seletor-pessoa',
  imports: [],
  templateUrl: './card-seletor-pessoa.html',
  styleUrls: ['./card-seletor-pessoa.css'],
})
export class CardSeletorPessoa {
  @Input() tipo_pessoa = '';
  @Input() descricao = '';
}
