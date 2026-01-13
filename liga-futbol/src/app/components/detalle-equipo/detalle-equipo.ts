import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para pipes básicos
import { ActivatedRoute, RouterModule } from '@angular/router'; // Importar RouterModule
import { LigaService } from '../../services/liga';
import { Equipo } from '../../models/equipo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-equipo',
  standalone: true, // Esto indica que es moderno
  imports: [CommonModule, RouterModule], // ¡Aquí importamos lo que usa el HTML!
  template: `
    @if (equipo) {
      <div class="ficha">
        <button (click)="volver()">Volver</button>
        <h1><img [src]="equipo.escudo" width="50"> {{ equipo.nombre }}</h1>
        
        <div class="stats">
          <p>Puntos: {{ equipo.pts }}</p>
          <p>Goles a Favor: {{ equipo.gf }}</p>
        </div>

        <h3>Plantilla Destacada</h3>
        <ul>
          @for (jugador of equipo.jugadores; track $index) {
            <li>{{ jugador }}</li>
          }
        </ul>
      </div>
    }
  `,
  styles: [`
    .ficha { background-color: #D6EAF8; padding: 20px; border: 1px solid #ccc; border-radius: 8px; max-width: 600px; margin: 20px auto; text-align: center; }
    .stats { display: flex; justify-content: space-around; margin: 20px 0; font-weight: bold; }
    ul { list-style-type: none; padding: 0; }
    li { background: #f9f9f9; margin: 5px; padding: 5px; }
  `]
})
export class DetalleEquipoComponent implements OnInit {
  equipo?: Equipo; // La interrogación indica que puede ser undefined al principio

  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.equipo = this.ligaService.getEquipoPorId(id);
    }
  }

  volver(): void {
    this.location.back();
  }
}