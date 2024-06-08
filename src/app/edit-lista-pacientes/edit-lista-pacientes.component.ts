import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaPacientesComponent } from '../lista-pacientes/lista-pacientes.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-lista-pacientes',
  standalone: true,
  imports: [
    RouterLink,
    ListaPacientesComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatMenuModule],
  templateUrl: './edit-lista-pacientes.component.html',
  styleUrl: './edit-lista-pacientes.component.css'
})
export class EditListaPacientesComponent {

}
