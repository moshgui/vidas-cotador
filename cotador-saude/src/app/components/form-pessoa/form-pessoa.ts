import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Buttons } from '../../shared/buttons/buttons';

interface Client {
  id: number;
  fullName: string;
  phone: string;
  age: number | null;
}

@Component({
  selector: 'app-form-pessoa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Buttons],
  templateUrl: './form-pessoa.html',
})
export class FormPessoa {
  isChildRouteActive: boolean = true; //controla a visibilidade do formulário

  constructor(private route: ActivatedRoute, private router: Router) {}
  //verifica se a rota filho esta ativa
  //atualiza a variavel isChildRouteActive
  ngOnInit() {
    this.isChildRouteActive = !!this.route.snapshot.firstChild;
    this.router.events.subscribe(() => {
      this.isChildRouteActive = !!this.route.snapshot.firstChild;
    });
  }

  // lista de clientes no formulário
  clients: Client[] = [{ id: 1, fullName: '', phone: '', age: null }];

  private nextId = 2;

  // adicionar cliente ao formulário
  //refatorar posteriormente para adicionar cnpj
  addClient(): void {
    this.clients.push({
      id: this.nextId++,
      fullName: '',
      phone: '',
      age: null,
    });
  }

  //remove cliente do formulário
  removeClient(id: number): void {
    if (this.clients.length > 1) {
      this.clients = this.clients.filter((p) => p.id !== id);
    }
  }

  // formatar telefone padrao (XX) XXXXX-XXXX
  formatPhone(event: any, person: Client): void {
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length <= 11) {
      if (valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
    }

    person.phone = valor;
  }
}
