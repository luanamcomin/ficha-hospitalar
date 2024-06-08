import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EditListaPacientesComponent } from '../edit-lista-pacientes/edit-lista-pacientes.component';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatMenuModule,
    EditListaPacientesComponent,
    RouterLink
  ],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent {

}
