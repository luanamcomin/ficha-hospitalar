import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  private pacientesSubject = new BehaviorSubject<Paciente[]>([
  {
    cpf: 12345678900,
    nome: "Luana Martins",
    dataNasc: "17/04/1996",
    sexo: "Feminino",
    telefone: "81999999999",
    tipoSangue: "A",
  },
  {
    cpf: 12345678900,
    nome: "Priscila",
    dataNasc: "01/01/2000",
    sexo: "Feminino",
    telefone: "(81)97777-7777",
    tipoSangue: "B",
  },
  {
    cpf: 12345678900,
    nome: "Amanda",
    dataNasc: "02/02/2000",
    sexo: "Feminino",
    telefone: "(81)98888-8888",
    tipoSangue: "B+",
  }
]);

  constructor() { }

  public lerPacientes(): Observable<Paciente[]> {
    return this.pacientesSubject.asObservable();
  }

  public incluirPaciente(paciente: Paciente) {
    const currentPacientes = this.pacientesSubject.value;
    this.pacientesSubject.next([...currentPacientes, paciente]);
  }
}


