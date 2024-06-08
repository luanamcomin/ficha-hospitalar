import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor() { }

  private pacientes: Paciente[] = [
  {
    cpf: 12345678900,
    nome: "Luana Martins",
    dataNasc: "17/04/96",
    sexo: "Feminino",
    telefone: "81999999999",
    tipoSangue: "A",
  },
  {
    cpf: 12345678900,
    nome: "Luana Martins",
    dataNasc: "17/04/96",
    sexo: "Feminino",
    telefone: "81999999999",
    tipoSangue: "A",
  },
  {
    cpf: 12345678900,
    nome: "Luana Martins",
    dataNasc: "17/04/96",
    sexo: "Feminino",
    telefone: "81999999999",
    tipoSangue: "A",
  }
];

public lerPacientes(): Paciente[] {
  return this.pacientes;
}

public inserirContato(pacientes: Paciente){
  this.pacientes.push(pacientes);

}
}

