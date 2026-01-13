import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // NECESARIO PARA [(ngModel)]
import { LigaService } from '../../services/liga';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-formulario-partido',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos FormsModule aquí
  template: `
    <div class="form-container">
      <h3>Jugar Partido</h3>
      <form (ngSubmit)="registrar()">
        <select [(ngModel)]="localId" name="local">
            <option value="" disabled selected>Local</option>
            @for (eq of listaEquipos; track eq.id) {
              <option [value]="eq.id">{{ eq.nombre }}</option>
            }
        </select>
        
        <input type="number" [(ngModel)]="golesLocal" name="gl" min="0" style="width: 50px;">
        
       

        <select [(ngModel)]="visitanteId" name="visitante">
            <option value="" disabled selected>Visitante</option>
            @for (eq of listaEquipos; track eq.id) {
              <option [value]="eq.id">{{ eq.nombre }}</option>
            }
        </select>
 <input type="number" [(ngModel)]="golesVisitante" name="gv" min="0" style="width: 50px;">
        <button type="submit" [disabled]="!localId || !visitanteId">Actualizar</button>
      </form>
      
      @if (mensajeError) {
        <p class="error">{{ mensajeError }}</p>
      }
    </div>
  `,
 styles: [`
    .form-container {
      background-color: #D6EAF8; /* Azul clarito de la foto */
      padding: 20px;
      border-radius: 0 0 10px 10px; /* Redondeado abajo */
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    h3 {
      margin-top: 0;
      color: #2c3e50;
      font-size: 1.1rem;
      margin-bottom: 15px;
    }

    form {
      display: grid;
      grid-template-columns: 2fr 1fr 2fr 1fr; /* Columnas para selects y goles */
      gap: 15px;
      align-items: end; /* Alinear abajo para que el botón cuadre */
    }

    /* Si la pantalla es pequeña, poner uno debajo de otro */
    @media (max-width: 600px) {
      form { grid-template-columns: 1fr; }
    }

    label {
      display: block;
      font-size: 0.8rem;
      color: #555;
      margin-bottom: 5px;
      font-weight: bold;
    }

    select, input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box; /* Importante para que no se salgan */
    }

    button {
      grid-column: 1 / -1; /* Botón ocupa todo el ancho */
      background-color: #2980B9;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s;
      margin-top: 10px;
    }

    button:hover {
      background-color: #1A5276;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    
    .error { color: #c0392b; font-weight: bold; margin-top: 10px; text-align: center;}
  `]
})
export class FormularioPartidoComponent {
  @Output() partidoJugado = new EventEmitter<void>();

  listaEquipos: Equipo[];
  localId: string = '';
  visitanteId: string = '';
  golesLocal: number = 0;
  golesVisitante: number = 0;
  mensajeError: string = '';

  constructor(private ligaService: LigaService) {
    this.listaEquipos = this.ligaService.getEquipos();
  }

  registrar(): void {
    if (this.localId === this.visitanteId) {
      this.mensajeError = 'El equipo local y visitante no pueden ser el mismo.';
      return;
    }
    
    this.ligaService.registrarPartido(this.localId, this.visitanteId, this.golesLocal, this.golesVisitante);
    this.mensajeError = '';
    this.partidoJugado.emit(); 
    
    this.golesLocal = 0;
    this.golesVisitante = 0;
  }
}