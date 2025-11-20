import { Component } from '@angular/core';
import { SeletorOperadora } from '../../components/seletor-operadora/seletor-operadora';
import { Buttons } from '../../shared/buttons/buttons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-operadoras',
  imports: [SeletorOperadora, Buttons, RouterLink],
  templateUrl: './operadoras.html',
})
export class Operadoras {}
