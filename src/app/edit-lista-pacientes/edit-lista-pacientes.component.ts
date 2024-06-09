import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaPacientesComponent } from '../lista-pacientes/lista-pacientes.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../models/paciente';

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
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-lista-pacientes.component.html',
  styleUrls: ['./edit-lista-pacientes.component.css']
})
export class EditListaPacientesComponent implements OnInit {
  form = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(),
    dataNasc: new FormControl(),
    sexo: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
    tipoSangue: new FormControl(),
  });

  private editingPaciente: Paciente | null = null;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const state = navigation.extras.state as { paciente: Paciente };
      if (state.paciente) {
        this.editingPaciente = state.paciente;
        this.form.patchValue(state.paciente);
      }
    }
  }

  onSubmit() {
    if (this.editingPaciente) {
      const updatedPaciente: Paciente = {
        ...this.editingPaciente,
        ...this.form.value,
      };
      this.pacienteService.atualizarPaciente(updatedPaciente);
      this.editingPaciente = null; // Reset the editing state
    } else {
      const newPaciente: Paciente = { ...this.form.value } as Paciente;
      this.pacienteService.incluirPaciente(newPaciente);
    }
    this.form.reset();
    this.router.navigate(['/pacientes']);
  }
}
