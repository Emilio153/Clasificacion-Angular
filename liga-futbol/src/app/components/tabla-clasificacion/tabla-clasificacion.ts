import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Para que funcione routerLink
import { LigaService } from '../../services/liga';
import { Equipo } from '../../models/equipo';
import os from '@angular/common/locales/os';

@Component({
  selector: 'app-tabla-clasificacion',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  template: `
    <h2>Clasificación de La Liga</h2>
    
    <table border="1" style="width: 100%; border-radius: 8px; border-collapse: collapse; background-color: #D6EAF8">
      <thead>
        <tr style="background-color: #333; color: white;">
          <th>Pos</th><th>Equipo</th><th>Pts</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th><th>GF</th><th>GC</th><th>DG</th>
        </tr>
      </thead>
      <tbody>
        @for (eq of equipos; track eq.id; let i = $index) {
          <tr> 
            <td style="padding-left: 15px;">{{ i + 1 }}</td>
            <td>
              <img [src]="eq.escudo" [alt]="eq.nombre" width="22" style="vertical-align: middle;">
              <a [routerLink]="['/equipo', eq.id]" style="margin-left: 8px; text-decoration: none; color: blue;"> 
                {{ eq.nombre }} 
              </a>
            </td>
            <td><strong>{{ eq.pts }}</strong></td>
            <td>{{ eq.pj }}</td>
            <td>{{ eq.g }}</td>
            <td>{{ eq.e }}</td>
            <td>{{ eq.p }}</td>
            <td>{{ eq.gf }}</td>
            <td>{{ eq.gc }}</td>
            <td>{{ eq.gf - eq.gc }}</td>
          </tr>
        }
      </tbody>
    </table>
    <button type="submit" (click)="resetearLiga()">Reiniciar</button>
  `
  
})
export class TablaClasificacionComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private ligaService: LigaService) { }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla(): void {
    this.equipos = this.ligaService.getEquipos();
  }

  resetearLiga(): void {
    this.ligaService.resetearLiga();
    this.actualizarTabla();
  }
}