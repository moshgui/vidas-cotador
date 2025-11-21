import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Buttons } from '../../shared/buttons/buttons';

interface Cliente {
  id: number;
  nomeCompleto: string;
  telefone: string;
  idade: number | null;
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
  ngOnInit() {
    this.isChildRouteActive = !!this.route.snapshot.firstChild;
    this.router.events.subscribe(() => {
      this.isChildRouteActive = !!this.route.snapshot.firstChild;
    });
  }

  clientes: Cliente[] = [{ id: 1, nomeCompleto: '', telefone: '', idade: null }];

  private proximoId = 2;

  // adicionar cliente ao formulário
  //refatorar posteriormente para adicionar cnpj
  adicionarCliente(): void {
    this.clientes.push({
      id: this.proximoId++,
      nomeCompleto: '',
      telefone: '',
      idade: null,
    });
  }

  //remove cliente do formulário
  removerCliente(id: number): void {
    if (this.clientes.length > 1) {
      this.clientes = this.clientes.filter((p) => p.id !== id);
    }
  }

  // formatar telefone padrao (XX) XXXXX-XXXX
  formatarTelefone(event: any, pessoa: Cliente): void {
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length <= 11) {
      if (valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
    }

    pessoa.telefone = valor;
  }
}
