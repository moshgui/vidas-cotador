import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-plano',
  imports: [],
  templateUrl: './seletor-plano.html',
  styleUrl: './seletor-plano.css',
})
export class SeletorPlano {
  @Input() clientName: string = '';
  @Input() ageRange = '';
  @Input() planName: string = '';
  @Input() planType: string = '';
  @Input() intPlanValue = '';
  @Input() planFeatures = '';
  @Input() doublePlanValue = '';
}
