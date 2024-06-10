import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Paciente } from '../models/paciente';
import { MatIcon } from '@angular/material/icon';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})

export class FichaComponent {
  @Input() paciente: Paciente | null = null;

  onClick() {
    alert('Ficha adicionada a fila');
  }

  constructor(private router: Router, private pacienteService: PacienteService) { }


  onDelete() {
    if (this.paciente) {
      this.pacienteService.deletarPaciente(this.paciente.cpf);
    }
  }

/*   onUpdate() {
    if (this.paciente) {
      this.pacienteService.atualizarPaciente(this.paciente);
    } */


  onUpdate() {
    if (this.paciente) {
      this.router.navigate(['/edit', this.paciente.cpf]);
    }
  }

}



/*
  editarPaciente(paciente: Paciente) {
    // Abra o formulário de edição com os detalhes do paciente
    this.paciente = {...paciente}; // Crie uma cópia do paciente para evitar mutações indesejadas
  }

  salvar() {
    // Atualize o paciente com os detalhes do formulário
    this.pacienteService.atualizarPaciente(this.paciente);
    this.paciente = null; // Limpe o paciente atual
  }
 */


