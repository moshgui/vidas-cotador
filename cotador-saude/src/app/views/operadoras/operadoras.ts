import { Component } from '@angular/core';
import { SeletorOperadora } from '../../components/seletor-operadora/seletor-operadora';
import { Buttons } from '../../shared/buttons/buttons';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-operadoras',
  imports: [NgIf, SeletorOperadora, Buttons, RouterLink],
  templateUrl: './operadoras.html',
})
export class Operadoras {
  isChildRouteActive: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.isChildRouteActive = !!this.route.snapshot.firstChild;
    this.router.events.subscribe(() => {
      this.isChildRouteActive = !!this.route.snapshot.firstChild;
    });
  }
}
