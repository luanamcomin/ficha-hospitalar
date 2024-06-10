import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaPacientesComponent } from '../lista-pacientes/lista-pacientes.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PacienteService } from '../services/paciente.service';
import { ActivatedRoute } from '@angular/router';

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
  styleUrl: './edit-lista-pacientes.component.css'
})
export class EditListaPacientesComponent {

/*   constructor(
    private pacienteService: PacienteService
  ){ } */

  constructor(
    private route: ActivatedRoute, private pacienteService: PacienteService
  ) { }

  form = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(),
    dataNasc: new FormControl(),
    sexo: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
    tipoSangue: new FormControl(),

  });

  onSubmit(){
    if (this.form.valid) {
      let paciente  = {
        nome:this.form.value.nome,
        cpf:this.form.value.cpf,
        dataNasc:this.form.value.dataNasc,
        sexo:this.form.value.sexo,
        telefone:this.form.value.telefone,
        tipoSangue:this.form.value.tipoSangue,
      }
      this.pacienteService.incluirPaciente(paciente);
      this.form.reset();
      alert('Paciente adicionado.');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

/*
  onSubmit(){
    let paciente  = {nome:this.form.value.nome,
                    cpf:this.form.value.cpf,
                    dataNasc:this.form.value.dataNasc,
                    sexo:this.form.value.sexo,
                    telefone:this.form.value.telefone,
                    tipoSangue:this.form.value.tipoSangue,
    }
    this.pacienteService.incluirPaciente(paciente);
    this.form.reset();
    alert('Paciente adicionado.');
  } */
}
