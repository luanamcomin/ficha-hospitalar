import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  private pacientesSubject = new BehaviorSubject<Paciente[]>([
    {
      cpf: 12345678000,
      nome: "Luana Martins",
      dataNasc: "17/04/1996",
      sexo: "Feminino",
      telefone: "(81)99999-9999",
      tipoSangue: "A",
    },
    {
      cpf: 12365678900,
      nome: "Priscila",
      dataNasc: "01/01/2000",
      sexo: "Feminino",
      telefone: "(81)97777-7777",
      tipoSangue: "B",
    },
    {
      cpf: 12345608900,
      nome: "Amanda",
      dataNasc: "10/08/1995",
      sexo: "Feminino",
      telefone: "(81)98888-8888",
      tipoSangue: "O+",
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

  public deletarPaciente(cpf: number) {
    const currentPacientes = this.pacientesSubject.value;
    const updatedPacientes = currentPacientes.filter(paciente => paciente.cpf !== cpf);
    this.pacientesSubject.next(updatedPacientes);
  }

  public atualizarPaciente(updatedPaciente: Paciente) {
    const currentPacientes = this.pacientesSubject.value;
    const updatedPacientes = currentPacientes.map(paciente =>
      paciente.cpf === updatedPaciente.cpf ? updatedPaciente : paciente
    );
    this.pacientesSubject.next(updatedPacientes);
  }

  public getPacientes(): Paciente[] {
    return this.pacientesSubject.value;
  }
}



