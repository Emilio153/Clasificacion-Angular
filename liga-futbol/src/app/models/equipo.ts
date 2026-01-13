export interface Equipo {
  id: string;
  escudo: string;
  nombre: string;
  pts: number;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  // Ampliación: Lista de jugadores
  jugadores?: string[]; 
}
