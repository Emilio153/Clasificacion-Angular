import { Routes } from '@angular/router';
import { DetalleEquipoComponent } from './components/detalle-equipo/detalle-equipo';

export const routes: Routes = [
  // Cuando la URL sea "equipo/algo", carga el Detalle
  { path: 'equipo/:id', component: DetalleEquipoComponent },
  
  // (Opcional) Si la ruta no existe, no hagas nada o redirige al inicio
  // { path: '**', redirectTo: '' } 
];