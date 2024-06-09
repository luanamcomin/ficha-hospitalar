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

  constructor(private pacienteService: PacienteService, private router: Router) {}

  onClick() {
    if (this.paciente) {
      this.router.navigate(['/edit'], { state: { paciente: this.paciente } });
    }
  }

  onDelete() {
    if (this.paciente) {
      this.pacienteService.deletarPaciente(this.paciente.cpf);
    }
  }
}
