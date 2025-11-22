import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { FormPessoa } from './components/form-pessoa/form-pessoa';
import { Operadoras } from './views/operadoras/operadoras';
import { SeletorPlano } from './components/seletor-plano/seletor-plano';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'iniciar-cotacao',
    component: FormPessoa,
    children: [
      {
        path: 'selecionar-operadora',
        component: Operadoras,
        children: [
          {
            path: 'selecionar-plano',
            component: SeletorPlano,
          },
        ],
      },
    ],
  },
];
