import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  updatedTodoName: string = '';

  @Input()
  todoItem!: { id: number, name: string };

  @Output() todoEdited = new EventEmitter<{ id: number, updatedName: string }>();

  @Output() todoDeleted = new EventEmitter<{ id: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  editTodo(todoId: number) {
    this.todoEdited.emit({
      id: todoId,
      updatedName: this.updatedTodoName
    })
    this.updatedTodoName = '';
  }

  deleteTodo(todoId: number) {
    this.todoDeleted.emit({ id: todoId });
  }
}
