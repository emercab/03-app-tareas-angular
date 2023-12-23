import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas'

  getTareas(): string[] {
    const tareas: string = localStorage.getItem(this.localStorageKey)!
    return tareas ? JSON.parse(tareas) : []
  }


  addTarea(tarea: string): void {
    const tareas = this.getTareas()
    tareas.push(tarea)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }


  deleteTarea(index: number): void {
    const tareas = this.getTareas()
    tareas.splice(index, 1)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }
}
