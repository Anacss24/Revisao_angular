import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  // Obter todas as tarefas
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Adicionar uma nova tarefa
  addTodo(todo: { title: string; completed: boolean }): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  // Deletar uma tarefa
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}