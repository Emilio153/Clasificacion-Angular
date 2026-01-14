import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaClasificacionComponent } from './components/tabla-clasificacion/tabla-clasificacion';
import { FormularioPartidoComponent } from './components/formulario-partido/formulario-partido';

@Component({
  selector: 'app-root',
  standalone: true,
  // Aquí decimos qué piezas vamos a usar en el HTML
  imports: [RouterOutlet, TablaClasificacionComponent, FormularioPartidoComponent],
  templateUrl: './app.html', // Apuntamos a tu archivo app.html
  styleUrl: './app.css'      // Apuntamos a tu archivo app.css
})
export class AppComponent {
  title = 'liga-futbol';
}