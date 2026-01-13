import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';

// 1. DATOS INICIALES (Con rutas corregidas 'img/...' y JUGADORES añadidos para la ampliación)
// 1. DATOS INICIALES (Plantillas completas 24/25 + Entrenadores)
const DATOS_INICIALES: Equipo[] = [
  { 
    id: 'realMad', escudo: 'img/realMad.png', nombre: 'Real Madrid CF', pts: 31, pj: 12, g: 10, e: 1, p: 1, gf: 26, gc: 10, 
    jugadores: [
      '👔 Entrenador: Carlo Ancelotti',
      'Thibaut Courtois', 'Andriy Lunin', 
      'Dani Carvajal', 'Eder Militao', 'David Alaba', 'Antonio Rüdiger', 'Ferland Mendy', 'Fran García',
      'Jude Bellingham', 'Eduardo Camavinga', 'Fede Valverde', 'Luka Modric', 'Aurélien Tchouaméni', 'Arda Güler',
      'Vinicius Jr', 'Kylian Mbappé', 'Rodrygo Goes', 'Brahim Díaz', 'Endrick'
    ] 
  },
  { 
    id: 'barca', escudo: 'img/barca.png', nombre: 'FC Barcelona', pts: 28, pj: 12, g: 9, e: 1, p: 2, gf: 32, gc: 15,
    jugadores: [
      '👔 Entrenador: Hansi Flick',
      'M. Ter Stegen', 'Iñaki Peña', 'W. Szczesny',
      'Jules Koundé', 'Pau Cubarsí', 'Iñigo Martínez', 'Alejandro Balde', 'Héctor Fort',
      'Pedri', 'Gavi', 'Frenkie de Jong', 'Marc Casadó', 'Dani Olmo', 'Fermín López',
      'Robert Lewandowski', 'Lamine Yamal', 'Raphinha', 'Ferran Torres', 'Ansu Fati', 'Pau Víctor'
    ] 
  },
  { 
    id: 'villarreal', escudo: 'img/villarreal.png', nombre: 'Villarreal CF', pts: 26, pj: 12, g: 8, e: 2, p: 2, gf: 24, gc: 10,
    jugadores: [
      '👔 Entrenador: Marcelino García',
      'Diego Conde', 'Luiz Júnior',
      'Raúl Albiol', 'Eric Bailly', 'Logan Costa', 'Juan Foyth', 'Alfonso Pedraza', 'Sergi Cardona',
      'Dani Parejo', 'Santi Comesaña', 'Pape Gueye', 'Álex Baena', 'Ramón Terrats',
      'Gerard Moreno', 'Ayoze Pérez', 'Yeremy Pino', 'Ilias Akhomach', 'Nicolas Pépé', 'Thierno Barry'
    ]
  },
  { 
    id: 'atleti', escudo: 'img/atleti.png', nombre: 'Atlético Madrid', pts: 25, pj: 12, g: 7, e: 4, p: 1, gf: 24, gc: 11,
    jugadores: [
      '👔 Entrenador: Diego Simeone',
      'Jan Oblak', 'Juan Musso',
      'José M. Giménez', 'Robin Le Normand', 'César Azpilicueta', 'Axel Witsel', 'Nahuel Molina', 'Reinildo',
      'Koke', 'Rodrigo De Paul', 'Conor Gallagher', 'Marcos Llorente', 'Pablo Barrios', 'Samuel Lino',
      'Antoine Griezmann', 'Julián Álvarez', 'Alexander Sorloth', 'Ángel Correa', 'Rodrigo Riquelme'
    ]
  },
  { 
    id: 'betis', escudo: 'img/betis.png', nombre: 'Real Betis', pts: 20, pj: 12, g: 5, e: 5, p: 2, gf: 19, gc: 13, 
    jugadores: [
      '👔 Entrenador: Manuel Pellegrini',
      'Rui Silva', 'Adrián San Miguel',
      'Marc Bartra', 'Diego Llorente', 'Natan', 'Héctor Bellerín', 'Youssouf Sabaly', 'Romain Perraud',
      'Isco Alarcón', 'Gio Lo Celso', 'Marc Roca', 'Johnny Cardoso', 'Pablo Fornals', 'William Carvalho',
      'Vitor Roque', 'Chimy Ávila', 'Ez Abde', 'Cédric Bakambu', 'Aitor Ruibal'
    ] 
  },
  { 
    id: 'espanyol', escudo: 'img/espanyol.png', nombre: 'RCD Espanyol', pts: 18, pj: 12, g: 5, e: 3, p: 4, gf: 15, gc: 15, 
    jugadores: [
      '👔 Entrenador: Manolo González',
      'Joan García', 'Fernando Pacheco',
      'Leandro Cabrera', 'Marash Kumbulla', 'Fernando Calero', 'Brian Oliván', 'Omar El Hilali', 'Álvaro Tejero',
      'Alex Král', 'José Gragera', 'Pol Lozano', 'Edu Expósito',
      'Javi Puado', 'Jofre Carreras', 'Alejo Véliz', 'Walid Cheddira', 'Pere Milla'
    ] 
  },
  { 
    id: 'athletic', escudo: 'img/athletic.png', nombre: 'Athletic Bilbao', pts: 17, pj: 12, g: 5, e: 2, p: 5, gf: 12, gc: 13, 
    jugadores: [
      '👔 Entrenador: Ernesto Valverde',
      'Unai Simón', 'Julen Agirrezabala',
      'Dani Vivian', 'Aitor Paredes', 'Yeray Álvarez', 'Yuri Berchiche', 'Óscar de Marcos', 'Iñigo Lekue',
      'Oihan Sancet', 'Iñigo Ruiz de Galarreta', 'Mikel Vesga', 'Beñat Prados', 'Unai Gómez',
      'Iñaki Williams', 'Nico Williams', 'Gorka Guruzeta', 'Álvaro Djaló', 'Alex Berenguer'
    ] 
  },
  { 
    id: 'sevilla', escudo: 'img/sevilla.png', nombre: 'Sevilla FC', pts: 16, pj: 12, g: 4, e: 4, p: 4, gf: 14, gc: 13, 
    jugadores: [
      '👔 Entrenador: García Pimienta',
      'Orjan Nyland', 'Álvaro Fernández',
      'Loïc Badé', 'Marcao', 'Kike Salas', 'José Ángel Carmona', 'Valentín Barco', 'Adrià Pedrosa',
      'Saúl Ñíguez', 'Nemanja Gudelj', 'Djibril Sow', 'Lucien Agoumé', 'Sambi Lokonga',
      'Jesús Navas', 'Dodi Lukebakio', 'Isaac Romero', 'Kelechi Iheanacho', 'Peque', 'Suso'
    ] 
  },
  { 
    id: 'valencia', escudo: 'img/valencia.png', nombre: 'Valencia CF', pts: 15, pj: 12, g: 4, e: 3, p: 5, gf: 13, gc: 14, 
    jugadores: [
      '👔 Entrenador: Rubén Baraja',
      'Giorgi Mamardashvili', 'Stole Dimitrievski',
      'Cristhian Mosquera', 'César Tárrega', 'Yarek Gasiorowski', 'Thierry Correia', 'Dimitri Foulquier', 'José Gayà',
      'Pepelu', 'Javi Guerra', 'André Almeida', 'Hugo Guillamón',
      'Hugo Duro', 'Rafa Mir', 'Dani Gómez', 'Luis Rioja', 'Diego López', 'Fran Pérez'
    ] 
  },
  { 
    id: 'realSoc', escudo: 'img/realSoc.png', nombre: 'Real Sociedad', pts: 14, pj: 12, g: 3, e: 5, p: 4, gf: 12, gc: 14, 
    jugadores: [
      '👔 Entrenador: Imanol Alguacil',
      'Álex Remiro', 'Unai Marrero',
      'Igor Zubeldia', 'Nayef Aguerd', 'Jon Pacheco', 'Aramburu', 'Javi López', 'Aihen Muñoz',
      'Martín Zubimendi', 'Luka Sucic', 'Brais Méndez', 'Beñat Turrientes', 'Sergio Gómez',
      'Mikel Oyarzabal', 'Takefusa Kubo', 'Orri Óskarsson', 'Sheraldo Becker', 'Sadiq Umar', 'Ander Barrenetxea'
    ] 
  }
];

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  private equipos: Equipo[] = [];
  private readonly CLAVE_LOCAL_STORAGE = 'liga_futbol_data';

  constructor() { 
    this.cargarDatos();
  }

  // --- PERSISTENCIA (LocalStorage) ---
  private cargarDatos(): void {
    const datosGuardados = localStorage.getItem(this.CLAVE_LOCAL_STORAGE);
    if (datosGuardados) {
      this.equipos = JSON.parse(datosGuardados);
    } else {
      // Si no hay datos, cargamos los iniciales rompiendo la referencia
      this.equipos = JSON.parse(JSON.stringify(DATOS_INICIALES));
    }
  }

  private guardarDatos(): void {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(this.equipos));
  }

  // --- GETTERS ---
  getEquipos(): Equipo[] {
    // Retornamos una COPIA ([...]) para forzar a Angular a detectar cambios
    return this.ordenarClasificacion([...this.equipos]);
  }

  getEquipoPorId(id: string): Equipo | undefined {
    return this.equipos.find(e => e.id === id);
  }

  // --- LÓGICA DE NEGOCIO ---
  registrarPartido(localId: string, visitanteId: string, golesLocal: number, golesVisitante: number): void {
    const local = this.getEquipoPorId(localId);
    const visitante = this.getEquipoPorId(visitanteId);

    if (!local || !visitante) return;

    // Actualizar PJ, GF, GC
    local.pj++; visitante.pj++;
    local.gf += golesLocal; local.gc += golesVisitante;
    visitante.gf += golesVisitante; visitante.gc += golesLocal;

    // Actualizar Puntos, G, E, P
    if (golesLocal > golesVisitante) {
      local.g++; local.pts += 3; visitante.p++;
    } else if (golesLocal < golesVisitante) {
      visitante.g++; visitante.pts += 3; local.p++;
    } else {
      local.e++; visitante.e++; local.pts++; visitante.pts++;
    }

    // Guardar en navegador
    this.guardarDatos();
  }

  // Función de ordenación (Puntos -> DG -> GF -> Nombre)
  private ordenarClasificacion(lista: Equipo[]): Equipo[] {
    return lista.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      
      const dgA = a.gf - a.gc;
      const dgB = b.gf - b.gc;
      if (dgB !== dgA) return dgB - dgA;

      if (b.gf !== a.gf) return b.gf - a.gf;
      
      return a.nombre.localeCompare(b.nombre);
    });
  }

  // Útil para reiniciar si te equivocas probando
  resetearLiga(): void {
    localStorage.removeItem(this.CLAVE_LOCAL_STORAGE);
    window.location.reload();
  }
}