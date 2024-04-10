import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoService } from './Services/TodoService';
import { Todo } from './Models/Todo';
import { format } from 'date-fns';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoAPP';
  formG: FormGroup;
  source: Array<Todo> = [];
  constructor(private formB: FormBuilder, private service: TodoService, private cdr: ChangeDetectorRef) {
    this.formG = this.formB.group({
      id: [0, Validators.required],
      title: ['', Validators.required],
      leadTime: ['', Validators.required],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.service.Get().subscribe(todoes => {
      this.source = todoes; console.log(todoes)
    }, error => alert("Error loading tasks from server" + error.message)
    )
    this.cdr.detectChanges();
  }

  formDate(dt: any) {
    let date = Date.parse(dt)
    return format(date, 'dd/MM/yyyy');
  }

  onSubmit() {
    let todo: Todo = { ...this.formG.value }
    this.service.Post(todo).subscribe(todoes => {
      console.log(todoes)
    }, error => alert("Error save tasks from server"));
    this.ngOnInit();
  }

  onRemove(id: number) {
    this.service.Delete(id);
    this.ngOnInit();
  }
}