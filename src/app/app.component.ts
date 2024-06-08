import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatMenuModule,
    ListaPacientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fixa-hospitalar';
}

