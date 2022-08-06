import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todoId: number = 1;
  todoName: string = '';

  @Output() todoCreated = new EventEmitter<{id: number, name: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  createTodo() {
    this.todoCreated.emit({
      id: this.todoId,
      name: this.todoName
    })
    this.todoId += 1;
    this.todoName = '';
  }

}
