import { Component, Input } from '@angular/core';
import { Buttons } from '../../shared/buttons/buttons';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-seletor-operadora',
  imports: [NgIf, Buttons, RouterLink, RouterOutlet],
  templateUrl: './seletor-operadora.html',
})
export class SeletorOperadora {
  @Input() nomeOperadora = '';
  @Input() descricaoOperadora = '';

  isChildRouteActive: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.isChildRouteActive = !!this.route.snapshot.firstChild;
    this.router.events.subscribe(() => {
      this.isChildRouteActive = !!this.route.snapshot.firstChild;
    });
  }
}
