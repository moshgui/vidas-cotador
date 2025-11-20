import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { FormPessoa } from './components/form-pessoa/form-pessoa';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'iniciar-cotacao',
    component: FormPessoa,
  },
];
