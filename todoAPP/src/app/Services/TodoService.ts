import { Service } from './Service';
import { Todo } from '../Models/Todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  pathBase: string = "/todo";

  constructor(private http: HttpClient) { }

  public Get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(Service.url + this.pathBase);
  }
  public Post(todo: Todo) {
    try {
      return this.http.post(Service.url + this.pathBase, todo);
    } catch (error) {
      throw error;
    }
  }
  public Delete(id: number) {
    try {
      this.http.delete(Service.url + this.pathBase + '/' + id);
    } catch (error) {
      throw error;
    }
  }
}
