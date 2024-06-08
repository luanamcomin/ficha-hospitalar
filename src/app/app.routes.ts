import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ModuleWithProviders } from '@angular/core';
import { EditListaPacientesComponent } from './edit-lista-pacientes/edit-lista-pacientes.component';

export const routes: Routes = [
  { path: 'pacientes', component: ListaPacientesComponent},
  { path: 'edit', component: EditListaPacientesComponent},
  { path: '', component: ListaPacientesComponent}
];

const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export { routing };
