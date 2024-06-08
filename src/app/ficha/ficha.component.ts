import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent {
  @Input() paciente: Paciente | null = null;

  onClick() {
    alert('Ficha adicionada a fila');
  }
}
