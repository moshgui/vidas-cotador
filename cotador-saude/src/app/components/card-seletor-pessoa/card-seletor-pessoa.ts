import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-seletor-pessoa',
  imports: [RouterLink], 
  templateUrl: './card-seletor-pessoa.html',
  styleUrls: ['./card-seletor-pessoa.css'],
})
export class CardSeletorPessoa {
  @Input() tipo_pessoa = '';
  @Input() descricao = '';
  }
