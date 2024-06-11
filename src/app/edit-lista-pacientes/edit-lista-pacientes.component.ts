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

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(){
    const cpf = this.route.snapshot.paramMap.get('cpf');
    if (cpf) {
      const cpfNumber = Number(cpf);
      if (!isNaN(cpfNumber)) {
        const paciente = this.pacienteService.findPacienteByCpf(cpfNumber);
        if (paciente) {
          this.form.patchValue(paciente);
        }
      } else {
        console.error('Invalid CPF format.');
      }
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const paciente = this.form.value as Paciente;
      this.pacienteService.incluirPaciente(paciente);
      this.form.reset();
      alert('Paciente adicionado.');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };
}
