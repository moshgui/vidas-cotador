import { Component } from '@angular/core';
import { SeletorPlano } from '../../components/seletor-plano/seletor-plano';

@Component({
  selector: 'app-planos',
  imports: [SeletorPlano],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class Planos {}
