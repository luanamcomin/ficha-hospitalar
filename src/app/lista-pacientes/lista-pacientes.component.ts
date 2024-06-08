import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EditListaPacientesComponent } from '../edit-lista-pacientes/edit-lista-pacientes.component';
import { FichaComponent } from '../ficha/ficha.component';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../models/paciente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatMenuModule,
    EditListaPacientesComponent,
    RouterLink,
    FichaComponent
  ],
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.lerPacientes().subscribe((pacientes) => {
      this.pacientes = pacientes;
    });
  }
}
